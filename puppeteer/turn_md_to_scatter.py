import markdown
import matplotlib.pyplot as plt


def cleanString(string):
    string = string.replace("|", ";")
    string = string.replace("<p>", ";")
    string = string.replace("</p>", ";")
    string = "\n".join(string.splitlines()[3:])
    string = "\n".join(string.splitlines()[:75])
    return string


def createDiagram(results):
    # Setzt die Figur und das Streudiagramm auf
    plt.figure(figsize=(8, 6))

    # Erklärung der Farben
    plt.suptitle('Rot = 5 Nutzer, Grün = 10 Nutzer, Lila = 20 Nutzer, Blau = 40 Nutzer', y=0.95, fontsize=12)

    # Achsen beschriften
    plt.xlabel("Run ID")
    plt.ylabel("Antwortzeiten (ms)")

    # Ergebnisse verarbeiten
    for row in results.splitlines():
        slices = row.split(';')
        if len(slices) < 4:
            continue  # Überspringen, falls die Zeile fehlerhaft ist

        x = int(slices[1])  # Annahme: Zweite Spalte ist die Run ID
        y = int(slices[2])  # Annahme: Dritte Spalte ist die Antwortzeit

        # Farben basierend auf der Nutzerzahl zuweisen
        if slices[3] == "Users: 5":
            color = 'red'
        elif slices[3] == "Users: 10":
            color = 'green'
        elif slices[3] == "Users: 20":
            color = 'purple'
        else:
            color = 'blue'

        plt.scatter(x, y, s=15, c=color, alpha=0.5)

    # Layout anpassen, um sicherzustellen, dass Text und Beschriftungen sichtbar sind
    plt.tight_layout(rect=[0, 0, 1, 0.95])
    plt.show()


# Markdown-Datei lesen und verarbeiten
with open('testergebnis.md', 'r') as f:
    htmlmarkdown = markdown.markdown(f.read())

htmlmarkdown = cleanString(htmlmarkdown)
print(htmlmarkdown)
createDiagram(htmlmarkdown)
