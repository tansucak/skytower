import json
import os

def write_lang_files():
    js_dir = r'c:\Users\tansu\Desktop\websitesiskytower\js'
    
    # I'll read the main translations.js to get the data
    with open(os.path.join(js_dir, 'translations.js'), 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Simple extraction of the object
    # We remove "const translations = " and the trailing ";"
    json_data_str = content.replace('const translations = ', '').strip()
    if json_data_str.endswith(';'):
        json_data_str = json_data_str[:-1]
    
    # Now we need to handle the fact that it's JS, not JSON (might have comments, no quotes on keys)
    # But the one I wrote WAS clean JSON-like.
    # Let's try to parse it. If it fails, I'll use a more robust way.
    
    try:
        # I'll use a more flexible approach to handle JS-like objects
        # But wait, I KNOW what I wrote. I'll just use the data I have.
        pass
    except:
        pass

    # I'll just hardcode the data here to be safe and fast.
    # I have it from my previous write_to_file call.
    
    # (Extracting data from my previous turn...)
    # I'll skip the extraction and just use the script to read the file and split by top-level keys.
    
    with open(os.path.join(js_dir, 'translations.js'), 'r', encoding='utf-8') as f:
        full_text = f.read()
        
    for lang in ['tr', 'en', 'ru', 'ka']:
        # Find start of lang block: "tr": {
        start_marker = f'"{lang}": {{'
        start_idx = full_text.find(start_marker)
        if start_idx == -1: continue
        
        # Find the end of this block by matching braces
        brace_count = 0
        end_idx = -1
        for i in range(start_idx + len(start_marker) - 1, len(full_text)):
            if full_text[i] == '{': brace_count += 1
            if full_text[i] == '}': 
                brace_count -= 1
                if brace_count == 0:
                    end_idx = i + 1
                    break
        
        if end_idx != -1:
            lang_json = full_text[start_idx:end_idx]
            lang_content = f'const translations = {{ {lang_json} }};'
            
            # Save .js
            with open(os.path.join(js_dir, f'translations_{lang}.js'), 'w', encoding='utf-8') as f:
                f.write(lang_content)
            
            # Save .min.js (just remove newlines and extra spaces)
            min_content = ' '.join(lang_content.split())
            with open(os.path.join(js_dir, f'translations_{lang}.min.js'), 'w', encoding='utf-8') as f:
                f.write(min_content)
                
            print(f"Updated translations_{lang}.js and .min.js")

if __name__ == "__main__":
    write_lang_files()
