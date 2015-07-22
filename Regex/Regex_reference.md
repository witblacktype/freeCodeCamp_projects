A Practical Collection of Regular Expressions 
=============================================

Practical Examples of Regular Expressions from regexone.com

## Example 1
<dl>
  <dt>Use Case</dt>
  <dd>Match any scientific, financial, or exponential number with a Regex</dd>
</dl>

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

> Applies knowledge of number expressions across computer science to tightly define the number format being matched.

## Example 2
<dl>
  <dt>Use Case</dt>
  <dd>Match a phone number</dd>
</dl>