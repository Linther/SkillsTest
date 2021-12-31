import json

dict =	{
  "name": "John Doe",
  "age": "35",
  "city": "Collingwood"
}
print (dict)

jsonText = json.dumps(dict)
print (jsonText)