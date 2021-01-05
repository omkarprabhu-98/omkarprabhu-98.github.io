year="_posts/$(date +%Y)"
echo $year

mkdir -p $year
cd $year

date=$(date '+%Y-%m-%d')
echo $date
file="$date-$1.md"
echo $file

touch file

template="---
title: 
toc:
  entries:
  - " "
  - 
  - 
---

### Note

- Please let me know if I misinterpreted or missed something."

echo "$template" > $file
