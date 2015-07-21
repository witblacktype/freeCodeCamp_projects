Regular Expressions Collection
==============================

## Use Case 1
> Match any scientific, financial, or exponential number

#### Requirements
task	| text	      |
----	| ----------- |
match | 3.14529			|
match | -255.34			|
match | 128					|
match | 1.9e10 			|
match | 123,340.00 	|
skip 	| 720p				|


### A Code Block

    header h1 a { 
      display: block; 
      width: 300px; 
      height: 80px; 
    }
		^-?\d+((\.|,|e)?(\d+)?){1,}$





The Solution