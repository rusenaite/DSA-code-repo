songs = [
    "Taylor Swift - Enchanted",
    "Taylor Swift - Love Story",
    "The Weeknd - Blinding Lights",
    "Adele - Hello",
    "Drake - God's Plan",
    "Dua Lipa - Levitating",
    "Tame Impala - The Less I Know The Better"
]

def search_songs(query, songs):
    results = []
    for title in songs:
        if title.lower().startswith(query.lower()):
            results.append(title)
    return results

results = search_songs(query, songs)
for r in results:
    print(" -", r)
