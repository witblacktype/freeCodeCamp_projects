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

	(\d{3})

> My expression matches the solution...this time.

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

Capture the name of the email and exclude the filter (+ character and string following it) and exclude the domain (@ character and string following it).

task		| text															| capture
------- | --------------------------------- | ----------
capture	| tom@hogwarts.com									| tom
capture	| tom.riddle@hogwarts.com						| tom.riddle
capture	| tom.riddle+regexone@hogwarts.com 	| tom.riddle
capture	| tom@hogwarts.eu.com								| tom
capture	| potter@hogwarts.com								| potter
capture	| harry@hogwarts.com								| harry
capture	| hermione+regexone@hogwarts.com		| hermione

#### My Solution

	(\w+\.?\w+)

> I knew this could be better but was struggling to get this one out.

#### The Solution

	^([\w.]*)

> This allows the email address to begin with an alphanumeric or a '.' character. The captured text will not include the '+' or '@' character or any string that follows either character.
>
> The end result: an email name may contain any '.' characters, '_' characters, numbers or letters - in upper or lower case.

## Example 4

#### Use Case

Capture the name of the email and exclude the filter (+ character and string following it) and exclude the domain (@ character and string following it).

task	| text
----- | ------
match | ```<a>This is a link</a>```
match | ```<a href='http://regexone.com'>Link</a>```
match | ```<div class='test_style'>Test</div>```
match | ```<div>Hello <span>world</span></div>```

#### My Solution

	<\w+ ?\w*=?('|")?(http://|\w+)*?\.?(\w+)?('|")?>(\w|\s)*</\w+>

> My solution cannot handle the full match to

	<div>Hello <span>world</span></div>

> It only matches 

	<span>world</span>

> I would need to expand the repitition of the tagging my RegEx can handle. 
>
> As pointed out on regexone.com, both email and html parsing is tricky with many outlying use cases. It is best to use a well built and maintained library to parse email and html.

#### The Solution

	// Capture a tag
	<(\w+)

	// Capture tag contents
	>([\w\s]*)<

	// Capture attribute values
	='([\w://.]*)'

> In truth, no significant html parsing should be accomplished by rolling your own RegEx. However, a RegEx which works similarly to a parser may be employed in certain use cases. The snippets provided by the solution on regexone.com give us some insight in how we can employ pseudo-parsing capture or validation.

## Example 5

#### Use Case

Capture the name of the email and exclude the filter (+ character and string following it) and exclude the domain (@ character and string following it).

task		| text								| capture
------- | ------------------- | ----------
skip		| .bash_profile				|
skip		| workspace.doc 			|
capture | img0912.jpg					| img0912, jpg
capture | updated_img0912.png | updated_img0912, png
skip 		| documentation.html 	|
capture | favicon.gif					| favicon, gif
skip 		| img0912.jpg.tmp 		|
skip 		| access.lock 				|

#### My Solution

	^(\w+)\.(jpg|png|gif)$

> There are some limits on acceptable file names that my RegEx can handle, but it seems an acceptable solution.

#### The Solution

	(\w+)\.(jpg|png|gif)$

> Same expression; one less character. Of course a file name will begin at the start of a line, duh!
