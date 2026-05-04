import re
import os

def minify_js():
    js_dir = r'c:\Users\tansu\Desktop\websitesiskytower\js'
    
    with open(os.path.join(js_dir, 'script.js'), 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Remove single line comments (but not in URLs)
    content = re.sub(r'(?<![:])//.*', '', content)
    # Remove multi-line comments
    content = re.sub(r'/\*.*?\*/', '', content, flags=re.DOTALL)
    # Remove extra whitespace
    content = re.sub(r'\s+', ' ', content)
    
    with open(os.path.join(js_dir, 'script.min.js'), 'w', encoding='utf-8') as f:
        f.write(content.strip())
    print("Minified script.js to script.min.js")

if __name__ == "__main__":
    minify_js()
