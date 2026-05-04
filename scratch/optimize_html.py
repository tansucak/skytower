import os
import re

def optimize_html_files():
    base_dir = r'c:\Users\tansu\Desktop\websitesiskytower'
    
    # Translations for fallback text
    translations = {
        'en': {
            'nav_home': 'Home',
            'nav_rooms': 'Rooms',
            'nav_guide': 'Batumi Guide',
            'nav_fitness': 'Fitness Centre',
            'nav_restaurant': 'Restaurant',
            'nav_contact': 'Contact'
        },
        'tr': {
            'nav_home': 'Anasayfa',
            'nav_rooms': 'Odalar',
            'nav_guide': 'Batum Rehberi',
            'nav_fitness': 'Fitness Merkezi',
            'nav_restaurant': 'Restoran',
            'nav_contact': 'İletişim'
        },
        'ru': {
            'nav_home': 'Главная',
            'nav_rooms': 'Номера',
            'nav_guide': 'Гид по Батуми',
            'nav_fitness': 'Фитнес-центр',
            'nav_restaurant': 'Ресторан',
            'nav_contact': 'Контакт'
        },
        'ka': {
            'nav_home': 'მთავარი',
            'nav_rooms': 'ოთახები',
            'nav_guide': 'ბათუმის გზამკვლევი',
            'nav_fitness': 'ფიტნეს ცენტრი',
            'nav_restaurant': 'რესტორანი',
            'nav_contact': 'კონტაქტი'
        }
    }

    for root, dirs, files in os.walk(base_dir):
        lang = os.path.basename(root)
        if lang not in translations:
            continue
            
        for file in files:
            if not file.endswith('.html'):
                continue
            
            file_path = os.path.join(root, file)
            try:
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                # 1. Fix SKYTOWER spacing and uppercase it
                content = re.sub(r'(?<![a-zA-Z0-9@.])SKYTOWER(?![a-zA-Z0-9])', 'SKY TOWER', content, flags=re.IGNORECASE)
                content = re.sub(r'(?<![a-zA-Z0-9@.])Sky Tower(?![a-zA-Z0-9])', 'SKY TOWER', content)
                
                # 2. Fix Nav Links Fallback Text
                for key, val in translations[lang].items():
                    # Pattern to match data-i18n="key">Old Text</a>
                    pattern = rf'data-i18n="{key}"([^>]*)>([^<]*)</a>'
                    replacement = rf'data-i18n="{key}"\1>{val}</a>'
                    content = re.sub(pattern, replacement, content)
                    
                    # Also for other tags
                    pattern = rf'data-i18n="{key}"([^>]*)>([^<]*)<'
                    replacement = rf'data-i18n="{key}"\1>{val}<'
                    content = re.sub(pattern, replacement, content)

                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(content)
                print(f"Optimized: {file_path}")
            except Exception as e:
                print(f"Error processing {file_path}: {e}")

if __name__ == "__main__":
    optimize_html_files()
