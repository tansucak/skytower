import os
import re

def add_about_id_to_contact():
    base_dir = r'c:\Users\tansu\Desktop\websitesiskytower'
    langs = ['tr', 'en', 'ru', 'ka']
    
    for lang in langs:
        file_path = os.path.join(base_dir, lang, 'contact.html')
        if not os.path.exists(file_path):
            continue
            
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Find the about section and add ID
            # <section class="section about-merged"> -> <section class="section about-merged" id="about">
            if 'id="about"' not in content:
                content = content.replace('class="section about-merged"', 'class="section about-merged" id="about"')
                
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(content)
                print(f"Added ID to: {file_path}")
        except Exception as e:
            print(f"Error processing {file_path}: {e}")

if __name__ == "__main__":
    add_about_id_to_contact()
