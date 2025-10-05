import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  "https://jcijxfawsxnmmthlkfgr.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpjaWp4ZmF3c3hubW10aGxrZmdyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk2MTAyNTksImV4cCI6MjA3NTE4NjI1OX0.Tc4GOkwgRYCusA9SSPGQ3hByx0-wlrzlt_7hI8Zn0PA"
)

export default supabase