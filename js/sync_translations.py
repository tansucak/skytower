import json
import os

def update_lang_js_files():
    js_dir = r'c:\Users\tansu\Desktop\websitesiskytower\js'
    translations_file = os.path.join(js_dir, 'translations.js')
    
    # Read the main translations.js
    # It's a JS file starting with "const translations = {"
    with open(translations_file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Extract the JSON part
    # We can use regex or just find the first { and last }
    start = content.find('{')
    end = content.rfind('}') + 1
    json_str = content[start:end]
    
    # We need to clean it up slightly if it has trailing commas or comments, 
    # but the one I wrote is clean JSON-like.
    # Actually, it's safer to just eval it or use a simple parser if it's JS.
    # Since I wrote it, I know it's a valid JS object.
    
    # I'll use a trick: save it as a temp python file and import it, or just use a simple regex to get languages.
    
    import re
    langs = ['tr', 'en', 'ru', 'ka']
    
    for lang in langs:
        # Find the block for this language
        # Pattern: "lang": { ... }
        # This is tricky with nested braces.
        # I'll just use the content I know is there.
        
        # Alternatively, I can just use the translations I have in my memory since I just wrote the file.
        pass

    # Actually, I'll just rewrite the individual files using the data from translations.js
    # I'll use the same logic as I used to write translations.js but per language.
    
    # I'll use a simplified version for this script.
    
    # Load the whole thing as a dict if possible
    # Since it's JS, not pure JSON, I'll do a simple extraction.
    
    # Better yet, I'll just use the data I have in my thought process to write the files directly.
    # I have all the translations in the previous tool call.
