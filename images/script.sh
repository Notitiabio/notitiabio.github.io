for file in *.webp ; do cwebp -q 50 "$file" -o "${file%.webp}.webp"; done
# this scrip converts jpg files to 50% quality webp files