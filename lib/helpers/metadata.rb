module Helpers
  module Metadata
    COPY_TO_OPTIONS = [
      :multipart_copy,
      :content_length,
      :copy_source_client,
      :copy_source_region,
      :acl,
      :cache_control,
      :content_disposition,
      :content_encoding,
      :content_language,
      :content_type,
      :copy_source_if_match,
      :copy_source_if_modified_since,
      :copy_source_if_none_match,
      :copy_source_if_unmodified_since,
      :expires,
      :grant_full_control,
      :grant_read,
      :grant_read_acp,
      :grant_write_acp,
      :metadata,
      :metadata_directive,
      :tagging_directive,
      :server_side_encryption,
      :storage_class,
      :website_redirect_location,
      :sse_customer_algorithm,
      :sse_customer_key,
      :sse_customer_key_md5,
      :ssekms_key_id,
      :copy_source_sse_customer_algorithm,
      :copy_source_sse_customer_key,
      :copy_source_sse_customer_key_md5,
      :request_payer,
      :tagging,
      :use_accelerate_endpoint
    ]

    def set_metadata
      puts "Rails is setting metadata..."

      if ENV["RAILS_ENV"] == "development"
        bucket = Rails.configuration.s3_resource.bucket('spinnmusicfiles')
      else
        bucket = Rails.configuration.s3_resource.bucket('spinnmusicfiles-pro')
      end

      object = bucket.object(self.audio.path[1..-1])

      puts "Getting #{self.class} with id #{self.id}"

      object_output = object.get
      location = self.audio.url[/.com\/(.+)\?/, 1]
      options = {}

      existing_options = object_output.to_h.slice(*COPY_TO_OPTIONS)

      options.merge!(existing_options)

      options.merge!({
        acl: 'public-read',
        metadata_directive: 'REPLACE',
        metadata: { duration: self.duration }
      })

      options.delete(:content_length)

      puts "Copying object to S3 Storage..."

      object.copy_to(location, options)

      puts "Metadata successfully updated for #{self.class}: #{self.id}"
    end
  end
end
