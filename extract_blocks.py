with open("src/styles/legacy/style.css", "r") as f:
    lines = f.readlines()

ranges = [
    (7264, 7506),
    (11319, 11325),
    (11650, 11680),
    (11874, 11891),
    (12024, 12028),
    (12228, 12268),
    (12414, 12440)
]

extracted = []
for start, end in ranges:
    # convert to 0-indexed
    extracted.extend(lines[start-1:end])
    extracted.append("\n/* ======================== */\n")

with open("src/styles/legacy/homepage-testimonials.css", "w") as f:
    f.writelines(extracted)
