import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://yjjpkogdolikceuzbxij.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlqanBrb2dkb2xpa2NldXpieGlqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc5NjgyMTksImV4cCI6MjA1MzU0NDIxOX0.eddLWa9XKyfl4eCNhNzJCCjFC3fOWa7qVAi7y8TQ_Mg')