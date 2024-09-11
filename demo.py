st = "Tiger The Torn The Towel"
countT = st.count('T')
n = -1
for i in range (countT):
    n = st.find('T',n+1)
    print(n)