import os
import zipfile

def create_production_zip():
    base_dir = r'c:\Users\tansu\Desktop\websitesiskytower'
    zip_name = 'skytower_final_production.zip'
    zip_path = os.path.join(base_dir, zip_name)
    
    # Remove old zip if exists
    if os.path.exists(zip_path):
        os.remove(zip_path)
        
    include_dirs = ['tr', 'en', 'ru', 'ka', 'css', 'js', 'assets']
    include_files = ['index.html', 'robots.txt', 'sitemap.xml', 'sw.js', 'favicon.ico']
    
    with zipfile.ZipFile(zip_path, 'w', zipfile.ZIP_DEFLATED) as zipf:
        # Add individual files
        for file in include_files:
            file_path = os.path.join(base_dir, file)
            if os.path.exists(file_path):
                zipf.write(file_path, file)
                print(f"Added file: {file}")
        
        # Add directories
        for folder in include_dirs:
            folder_path = os.path.join(base_dir, folder)
            if os.path.exists(folder_path):
                for root, dirs, files in os.walk(folder_path):
                    for file in files:
                        # Skip potentially sensitive or temporary files
                        if file.endswith('.py') or file.startswith('.') or file.endswith('.zip'):
                            continue
                        
                        file_full_path = os.path.join(root, file)
                        arcname = os.path.relpath(file_full_path, base_dir)
                        zipf.write(file_full_path, arcname)
                print(f"Added folder: {folder}")
                
    print(f"\nProduction zip created successfully: {zip_path}")

if __name__ == "__main__":
    create_production_zip()
