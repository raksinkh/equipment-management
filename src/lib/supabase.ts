import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types
export interface User {
  id: string
  email: string
  name: string
  role: 'user' | 'manager'
  created_at: string
}

export interface Equipment {
  id: string
  name: string
  description: string
  status: 'available' | 'borrowed' | 'maintenance'
  location: string
  image_url?: string
  created_at: string
  updated_at: string
}

export interface Booking {
  id: string
  user_id: string
  equipment_id: string
  start_date: string
  end_date: string
  status: 'pending' | 'approved' | 'rejected' | 'completed'
  purpose: string
  created_at: string
  updated_at: string
  user?: User
  equipment?: Equipment
}

export interface Notification {
  id: string
  user_id: string
  type: 'booking_request' | 'booking_approved' | 'booking_rejected' | 'equipment_returned'
  message: string
  read: boolean
  created_at: string
}
