
import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv'
import path from 'path'

// Load .env from root
dotenv.config({ path: path.resolve(process.cwd(), '.env') })

const url = process.env.NEXT_PUBLIC_SUPABASE_URL
const key = process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY

if (!url || !key) {
  console.log('Missing env vars')
  process.exit(1)
}

const supabase = createClient(url, key)

async function check() {
  console.log('Checking Storage Buckets...')
  const { data: buckets, error } = await supabase.storage.listBuckets()
  
  if (error) {
    console.error('Error listing buckets:', error.message)
    return
  }

  const bucket = buckets.find(b => b.name === 'article-images')
  
  if (!bucket) {
    console.log('❌ Bucket "article-images" NOT FOUND.')
    console.log('   Action: You need to create a public bucket named "article-images".')
  } else {
    console.log('✅ Bucket "article-images" exists.')
    console.log(`   Public: ${bucket.public}`)
    
    if (!bucket.public) {
        console.log('❌ Bucket is NOT public. Images wont be visible.')
        console.log('   Action: Make the bucket public.')
    }
  }
}

check()
