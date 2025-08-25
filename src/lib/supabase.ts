import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

// Only create client if we have valid credentials
export const supabase = supabaseUrl && supabaseAnonKey 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null

// Database types matching your email_subscribers table
export interface EmailSubscriber {
  id?: string
  email: string
  created_at?: string
  notified?: boolean
  source?: string
  user_agent?: string
  ip_address?: string
}

// Database functions
export async function addEmailSubscriber(
  email: string, 
  source: string = 'landing-page',
  userAgent?: string,
  ipAddress?: string
): Promise<void> {
  if (!supabase) {
    throw new Error('Supabase client not configured. Please check your environment variables.')
  }

  const { error } = await supabase
    .from('email_subscribers')
    .insert([
      { 
        email: email.toLowerCase().trim(),
        source,
        user_agent: userAgent,
        ip_address: ipAddress,
        notified: false
      }
    ])

  if (error) {
    console.error('Supabase error details:', error);
    console.error('Error code:', error.code);
    console.error('Error message:', error.message);
    
    // Handle duplicate email error specifically
    if (error.code === '23505') {
      throw new Error('This email is already subscribed to our waitlist.')
    }
    // Handle RLS policy error
    if (error.code === '42501' || error.message.includes('row-level security')) {
      throw new Error(`RLS Error: ${error.message}`)
    }
    throw new Error(`Database error: ${error.message}`)
  }

  // Success - no return needed
}

export async function checkEmailExists(email: string): Promise<boolean> {
  if (!supabase) {
    throw new Error('Supabase client not configured. Please check your environment variables.')
  }

  const { data, error } = await supabase
    .from('email_subscribers')
    .select('id')
    .eq('email', email.toLowerCase().trim())
    .single()

  if (error && error.code !== 'PGRST116') { // PGRST116 is "not found" error
    throw new Error(error.message)
  }

  return !!data
}
