Regular Expressions Collection
==============================

## Use Case 1
> Match any scientific, financial, or exponential number

#### Requirements
task	| text	| result
----	| ----	| ------
match | text	| 3.14529		
match | text	| -255.34		
match | text	| 128		
match | text	| 1.9e10
match | text	| 123,340.00
skip 	| text	| 720p

^-?\d+((\.|,|e)?(\d+)?){1,}$





The Solution