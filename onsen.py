import csv
path=r"C:\Users\tani0\OneDrive - Hiroshima City University\web\onsen\data\onsen_list.csv"
with open(path, 'r') as f:
    reader = csv.reader(f)
    for line in reader:
        print(line)