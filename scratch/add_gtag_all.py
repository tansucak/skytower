import os

def add_google_tag_to_all_html():
    base_dir = r'c:\Users\tansu\Desktop\websitesiskytower'
    tag_id = "AW-664629012"
    tag_html = f"""<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id={tag_id}"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){{dataLayer.push(arguments);}}
  gtag('js', new Date());
  gtag('config', '{tag_id}');
</script>"""

    # Look for all .html files
    for root, dirs, files in os.walk(base_dir):
        for file in files:
            if file.endswith('.html'):
                file_path = os.path.join(root, file)
                try:
                    with open(file_path, 'r', encoding='utf-8') as f:
                        content = f.read()
                    
                    if tag_id not in content:
                        # Insert before </head>
                        if '</head>' in content:
                            new_content = content.replace('</head>', f'{tag_html}\n</head>')
                            with open(file_path, 'w', encoding='utf-8') as f:
                                f.write(new_content)
                            print(f"Added tag to: {file_path}")
                        else:
                            print(f"No </head> found in: {file_path}")
                    else:
                        print(f"Tag already exists in: {file_path}")
                except Exception as e:
                    print(f"Error processing {file_path}: {e}")

if __name__ == "__main__":
    add_google_tag_to_all_html()
