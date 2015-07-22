A Practical Collection of Regular Expressions 
=============================================

Practical Examples of Regular Expressions from regexone.com

## Example 1

#### Use Case

Match any scientific, financial, or exponential number with a RegEx.

#### Requirements
task	| text	      
----	| ----------- 
match | 3.14529			
match | -255.34			
match | 128					
match | 1.9e10 			
match | 123,340.00 	
skip 	| 720p				

#### My Solution
  
	^-?\d+((\.|,|e)?(\d+)?){1,}$

> Could be improved so that only one of each character 'e' and '.' can be present in the match.

#### The Solution

	^-?\d+(,\d+)*(\.\d+(e\d+)?)?$

> Applies knowledge of number expressions across computer science to tightly define the number format being matched. This solution overcomes the shortcomings in my solution.

## Example 2

#### Use Case

Capture the area code from the following numbers listed in the following formats.

task		|	text						| capture
------- | --------------- | -------
capture |	415-555-1234		| 415
capture |	650-555-2345		| 650
capture |	(416)555-3456		| 416
capture |	202 555 4567		| 202
capture |	4035555678			|	403
capture |	1 416 555 9292	| 416

#### My Solution

	\)?(\d{3})

> My expression matches the first three numbers in a group found after a possible opening parenthesis.

#### The Solution

	(\d{3})

> The opening parenthesis option in my solution is unneccessary. Merely capturing the first group of three digits will accomplish this task.

## Example 2 Challenge

#### Use Case

Using the same phone number data from example 2, capture all digits of the phone number only: assume this string will be used for robo-dialing.

task		|	text						| capture
------- | --------------- | -------
capture |	415-555-1234		| 4155551234
capture |	650-555-2345		| 6505552345
capture |	(416)555-3456		| 4165553456
capture |	202 555 4567		| 2025554567
capture |	4035555678			|	4035555678
capture |	1 416 555 9292	| 4165559292

#### The Solution

	1?[\s-]?\(?(\d{3})[\s-]?\)?(\d{3})[\s-]?(\d{4})

> This works to reduce US Phone Numbers from the listed forms into just the ten digits that comprise the number. This method could do better though: extra whitespace around the hyphens would be problematic for this expression.

## Example 3

#### Use Case

Matching emails.
