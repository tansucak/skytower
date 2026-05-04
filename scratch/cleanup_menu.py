import os
import re

def cleanup_nav_menu():
    base_dir = r'c:\Users\tansu\Desktop\websitesiskytower'
    
    for root, dirs, files in os.walk(base_dir):
        for file in files:
            if not file.endswith('.html'):
                continue
            
            file_path = os.path.join(root, file)
            try:
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                # Regex to find the button inside a <nav> tag or <ul><li>...</li></ul> structure
                # and remove it if it's NOT inside a .hero-btns div.
                # Actually, we can just look for the button being preceded by </a> in a <li>
                
                # Pattern: </a>\n\s+<a href="contact\.html#about"[^>]*>.*?</a>
                # specifically when it's inside <li>...</li>
                
                new_content = re.sub(r'(<li><a href="rooms\.html"[^>]*>.*?</a>)\s*<a href="contact\.html#about"[^>]*>.*?</a>', r'\1', content)
                
                if new_content != content:
                    with open(file_path, 'w', encoding='utf-8') as f:
                        f.write(new_content)
                    print(f"Cleaned up menu in: {file_path}")
            except Exception as e:
                print(f"Error processing {file_path}: {e}")

if __name__ == "__main__":
    cleanup_nav_menu()
