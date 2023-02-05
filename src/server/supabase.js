import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://fbpqftoyjknnebchvprf.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZicHFmdG95amtubmViY2h2cHJmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzUzMDY0OTUsImV4cCI6MTk5MDg4MjQ5NX0.e2Wz8SqYzwnzGO1i0QlQmTBVQeHBDiX8YCKnLg7B_s4"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)