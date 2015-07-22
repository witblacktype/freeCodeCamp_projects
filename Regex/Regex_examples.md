A Practical Collection of Regular Expressions 
=============================================

Practical Examples of Regular Expressions from regexone.com

## Example 1

#### Use Case

Match any scientific, financial, or exponential number with a RegEx.

#### Requirements
task	| text	      |
----	| ----------- |
match | 3.14529			|
match | -255.34			|
match | 128					|
match | 1.9e10 			|
match | 123,340.00 	|
skip 	| 720p				|

#### My Solution
  
	^-?\d+((\.|,|e)?(\d+)?){1,}$

> Could be improved so that only one of each character 'e' and '.' can be present in the match.

#### The Solution

	^-?\d+(,\d+)*(\.\d+(e\d+)?)?$

> Applies knowledge of number expressions across computer science to tightly define the number format being matched. This solution overcomes the shortcomings in my solution.

## Example 2

#### Use Case

Match a phone number.