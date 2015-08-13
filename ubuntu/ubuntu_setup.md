Fast Development Setup in Ubuntu to Start Working Now
=====================================================

If you found this from a search, the following few sections describe the reasoning behind why this was valuable to me and how it might be valuable to you. I hope it helps. Otherwise, skip this silliness and get to the setup [10 Steps](#11-steps)

### Starting Point

These are the basic assumptions I am using to direct my workflow and tooling.

+ I have a WiFi network available and the proper credentials to connect to the network.
+ The project I want to work on is on Github and password authentication is acceptable for transmission.
+ I am comfortable entering commands into the terminal and have a solid understanding of all commands being invoked with ```sudo```. If not, I am willing to suffer the consequences of my own mistakes.
+ The terminal is a suitable environment for managing my project with git.
+ My project does not need any compiler or pre-compiler.
+ My project will be able to be served locally by Firefox (ie. there are no server or database requirements for running my project).

### My Relevant Background

I have only ever used Ubuntu before to download and use an IDE for coding C++ in a math class. My experience in Ubuntu is close to zero and minimal time on a Linux server is my only other direct experience to this operating system. I have never used any Linux desktop distribution since acquiring any skills on a command line. I acquired my basic Unix-like skills in OS X on the command line and working with my Linux web server knowing the transferability of the skills and the accessibility of tools like bash and git across various Unix-like operating systems.

### My Motivation

I had just created an Ubuntu usb that was bootable on a Mac. In attempting to load Ubuntu from the usb, I deleted everything off of my Mac and installed the usb version of Ubuntu on my Mac. All is not lost: I have time machine backups on another device and most of my recent work has all been pushed to Github. I cannot (or do not know how to) run Ubuntu from the usb and the operating system on my computer does not work. Until I can reinstall OS X, the only way I can manage to run an operating system on my Mac is the trial version of Ubuntu.

    Hello non-persistant World

When I showed off my workflow for a non-persistant OS, my design partner told me it was very 'cyber punk'. I took that as a compliment.

I can just keep working with the project I have been hosting on Github if I have the minimum tools necessary and can push my changes to Github - since removing the usb or powering down my computer will destroy any changes made to the trial operating system. My objective was to streamline acquiring the base development tools for a Github-hosted project. I also included a few tweaks that I feel have a major impact in optimizing my workflow based on my current OS X dev workflow.

### For the Security Conscious Noob

When following instructions you find online, you should be skeptical of their value, accuracy and intent. When following this guide or any other 'suspect' resource, use the [RSAP](http://www.freecodecamp.com/field-guide/how-do-i-get-help-when-i-get-stuck) method to verify the information provided by your resource. Additionally, the ```sudo``` command can override permissions and allow very consequential commands to be executed. Whenever any guide tells you to run a command that begins with ```sudo```, I recommend verifying the advice via a second source and fully understanding what the command will do when executed. If you are told to download something from the internet, use RSAP to find the site for the official download instead of downloading from a provided link which may be questionable regarding its authenticity.

### This Guide's Value to You

This setup is fast and focused on getting back to work in a new Ubuntu Linux OS. I wrote this guide after 48 hours of working in the non-persistant environment I had unfortunately created. This quick setup has allowed me to continue with my work and write this guide without a reliable local save function. Whether you are booting into Ubuntu for the first time or evaluating the trial version, this guide is intended to get you into a development workflow on Ubuntu quickly.

## <a id="10-steps"></a>10 Steps to Start Working on a Github hosted project from a clean install of Ubuntu

### Adjust Screen Resolution

I found the default screen resolution uncomfortably small. Check the current resolution and available resolution settings. The command ```xrandr``` with no arguments will list the screen resolutions available and information about your screen settings.

    $ xrandr

The ```*``` asterisk marks the current resolution. The ```+``` plus marks the recommended resolution(s).

Passing the ```-s``` size option we can set the resolution to our choice.

    $ xrandr -s 1920x1200

I find this more comfortable without feeling 'big' on my 13" Macbook than the recommended resolution of ```2560x1600```.

Docs: The man pages. Run the terminal command ```$ man xrandr```.

### Connect to WiFi

Once severe eyestrain has been relieved, we need to access valuable things from the outside world. Let's setup your WiFi connection.

Open the system settings from the dock. It's the gear and wrench icon. Select Software and Updates and select the Additional Drivers tab. Wait for any available drivers to be located. Select the driver provided and Apply Changes.

Select the WiFi icon in the upper dock. It is the signal icon that looks like a piece of a pie. Selecting on it, you should see a list of visible WiFi networks in range. If you do not see the available networks, I found that toggling the selected driver off and back on solved the trick on more than one occasion.

Select your desired network and authenticate as necessary. Open Firefox and navigate to a website to verify that you can connect to internet resources.

Navigate to [Firebug](http://getfirebug.com/) ```http://getfirebug.com/``` in Firefox.

Keep an eye on the WiFi icon in the upper right corner. It's appearance indicates whether your computer is connected to a WiFi signal and the strength of the signal if connected to a network.

If you connected to the Firebug homepage, you have an internet connection through your WiFi configuration and the Firebug page is not experiencing a service interruption. You are ready to move on.

If you did not connect to the Firebug page with the available link to download, try to navigate to a site like [Google](google.com) ```google.com``` or [Mozilla](mozilla.org) ```mozilla.org```. If you could not access either of these, select the WiFi icon in the upper right corner to inspect the available networks and begin troubleshooting. This is not a troubleshooting guide and I would recommend using the [RSAP](http://www.freecodecamp.com/field-guide/how-do-i-get-help-when-i-get-stuck) method to the best of your ability to solve your connection problem.

Link to RSAP method for problem solving: ```http://www.freecodecamp.com/field-guide/how-do-i-get-help-when-i-get-stuck```

Text-only links have been provided in addition to the links to this point for you to easily read the url's considering that you might be reading this from a device other than the one running Ubuntu that you are setting up. Once your internet connection is established, open this guide [Ubuntu Setup](https://github.com/witblacktype/freeCodeCamp_projects/blob/master/ubuntu/ubuntu_setup.md) in Firefox on your Ubuntu machine

Link: ```https://github.com/witblacktype/freeCodeCamp_projects/blob/master/ubuntu/ubuntu_setup.md```.

On your new Ubuntu machine, clicking on any highlighted text in this document will open up the link with Firefox (the default web browser in Ubuntu).

Docs: [Official Ubuntu Documentation - WifiDocs](https://help.ubuntu.com/community/WifiDocs/WiFiHowTo)

### Install Firebug for a Browser Debugging Tool

Download [Firebug](http://getfirebug.com) from ```http://getfirebug.com/```

Once downloaded, click on the download to install the Firebug extension for Firefox.

Docs: [Official Firebug Documentation](http://getfirebug.com/faq/)

### Update the Package Manager

Welcome to your Ubuntu package manager ```apt-get```. It will install, update, configure, and remove programs. First thing is to update it.

    $ sudo apt-get update

Docs: The man pages. Run the terminal command ```$ man apt-get```.

### Install Development Tools  

Now we can install the programs we need using ```apt-get```. My two primary tools will be git and a text editor with a way to copy and paste between them.

Let's get git first. Say that ten times fast.

    $ sudo apt-get install git

Docs: The man pages. Run the terminal command ```$ man git```.

I will use Atom as my text editor because it is free, easy to acquire (courtesy of webupd8.org) and 'hackable'. 'Hackable' has to mean it is awesome, right? I had never used it myself before this setup. [Documentation for ppa install from WEBUPD8](webupd8.org/2014/05/install-atom-text-editor-in-ubuntu-via-ppa.html).

    $ sudo add-apt-repository ppa:webupd8team/atom
    $ sudo apt-get update
    $ sudo apt-get install atom

The Debian-based Atom distribution is available on [Github from the Atom team](https://github.com/atom/atom) as well, but I didn't realize this when I first set this up.

Docs: [Atom Official Documentation](https://atom.io/docs)

I also want to be able to copy and paste between the shell and Atom. For that, we will install ```xclip```. Like installing Firebug, adjusting the screen resolution and rearranging the dock icons, this is not required, but a useful workflow improvement. Before we can install xclip, we need to add the 'universe' repository. Thanks to user Kangaroo on [Ask Ubuntu for this beauty](http://askubuntu.com/questions/148638/how-do-i-enable-the-universe-repository) on adding the 'universe' repository.

    $ sudo add-apt-repository "deb http://archive.ubuntu.com/ubuntu $(lsb_release -sc) universe"
    $ sudo apt-get update
    $ sudo apt-get install xclip

To paste from ```xclip```, simply use the middle mouse button. My MacBook Pro seemingly lacks a middle mouse button as part of its touchpad. If you are using the  synaptics driver, the 'middle-mouse button' is merely hidden. To paste an X selection, tap the upper right corner of the touchpad. Docs for troubleshooting the touchpad: [Ubuntu Official Documentation - Synaptics Touchpad](https://help.ubuntu.com/community/SynapticsTouchpad)

Time to Test ```xclip```. We will make a file called testfile and add text to the file for testing our ```xclip``` functionality.

    $ touch testfile
    $ echo "xclip is awesome sauce" >> testfile
    $ cat testfile | xclip

Now go "middle click" to paste the output somewhere - perhaps a new file in Atom would suffice. If you get the string "xclip is awesome sauce", then you can delete testfile with the command ```$ rm testfile```.

Docs: The man pages. Run the terminal command ```$ man xclip```. I used the first example from the man pages to test the functionality of xclip.

After a few hours in Ubuntu, I fully understand how OS X not shipping with a package manager feels like a huge oversight from a developer perspective. Previously, it felt like a minor oversight having never used Linux from the command line. The Mac Homebrew slogan "The missing package manager for OS X" now feels fully deserved after using ```apt-get``` which is standard to Debian-based Linux distributions.

### Rearrange the Dock

Once I figured out that the shortcut ```cmd``` + ```tab``` did, in fact, cycle through programs, albeit differently from OS X, I rearranged my dock to prioritize my dev tools for a faster workflow. The Mac ```cmd``` key and the Windows ```window``` key are known in Linux as the ```super``` key. The shortcut ```super``` + ```tab``` will cycle through programs in the dock - to keep your fingers on the keyboard, where they rock.

To edit the order of programs in the dock, click and hold on an item in the dock to enable drag-and-drop and move it to the desired dock position. I set up my dock based on my priorities being a browser, text editor, shell and files.

##### From the Top
- Search - a seemingly immovable object
- Firefox
- Atom
- Terminal
- Files
- whatever else down here doesn't matter
- more stuff that doesn't matter
- system settings
- devices

Docs: I was unable to find anything resembling 'documentation'. I just figured this out, but you could check these seemingly-relevant docs: [Ubuntu Official Documentation - Ubuntu Desktop Guide](https://help.ubuntu.com/stable/ubuntu-help/).

### Clone a Project in Progress

Let's keep it simple. This project will live in your home.

    $ cd ~
    $ git clone https://github.com/[github_username]/[repo_name].git

If this stuff is easy for you, put it wherever you like but note the instructions following may be slightly different for you as a result.

Docs: The man pages. Run the terminal command ```$ man git clone```.

### Configure the Upstream Branch

First, run the following command to see the details of the remote repositories. Move to the git project directory and list the remote repositories. You may run a ```git status``` at any time while working with git.

    $ cd [repo_name]
    $ git remote -v

The verbose ```-v``` option displays the details in addition to the names of the remotes.

Run the following command to add the upstream branch.

    $ git remote add upstream https://github.com/[github_username]/[repo_name].git

If you run ```git remote -v``` again, you will now see the upstream branch as well.

Docs: The man pages. Run the terminal command ```$ man git remote```.

### You Should Probably Create Your Own Branch

I imagine that if Linus Torvalds were here, he would point out how much our code sucks. He would also show us how we could work with our sucky code in a little corner and not disturb the more gifted among us. Create your own branch! Now your sucky code can live in it's own sucky world like my code. If your code doesn't suck, other people may care.

    $ git checkout -b iSuck

Now no one will mess with your branch. If your code is actually good, you can just create a new branch called something more dignified. However, you would already know how to do that and this guide might be a total waste of your time, but I digress. If you suck, embrace the suck. Before long, you will suck less.

For those with branch allergens, if you are the sole contributer to a project, you can just commit on master like a boss. That's how this repo got built just for speed of development's sake.

Docs: The man pages. Run the terminal command ```$ man git checkout```.

### Open Project in Atom and Get to Work

Now that you are on your own branch or plan to commit on master like it aint no thang, open your project and begin work.

    $ cd ~
    $ atom [repo_name]

## Off to Work

Now that your new Ubuntu machine is setup for work, I will cover how I leverage this setup in my workflow.

### The Workflow

This guide was developed on a trial version of Ubuntu using a workflow resulting from this same setup. Below are the two workflows I have used thus far from this setup.

The two main tasks that comprise each workflow:

- Develop locally in Atom and use Firefox to inspect the document.
- Develop locally under git and push changes to Github.

##### Use Case # 1

*Develop a javascript algorithm locally and save work to a Github repo.*

Writing these algorithms is my current project in progress. This setup exists so I can get on with this task.

- Open project in Atom with ```ctrl``` + ```o``` or from the shell ```$ atom [directory_name]```.
- Open the appropriate index.html file in Firefox.<br>
  There are many ways to do this quickly.
  1. From Atom, right-click on the file in Atom project browser and select 'Show in File Manager'. Then select the file from the Ubuntu file browser and press ```ctrl``` + ```o``` to open in the default browser (Firefox).
  2. From Firefox, press ```ctrl``` + ```o``` to open a file. Find and select it from the Ubuntu file browser and press ```return``` to open it with Firefox.
  3. From Terminal, ```$ firefox ~/[repo_name]/[path]/[to]/[file]/index.html```. Fill in the appropriate path and done.
- In Firefox, open the Firebug debugging console ```f12```.
- Make your changes to the project in Atom. DO REAL WORK HERE.
- Save changes in Atom ```ctrl``` + ```s```.
- Reload index.html in Firefox ```ctrl``` + ```r```.
- Debug your javascript using the Firebug debugging console. THE OTHER REAL WORK IS DOWN HERE.
- Commit changes to your working branch ```$ git commit -am "Edit File X"```.
- Push your branch to the remote repo on Github ```$ git push```. Use password authentication for pushing to Github.

This workflow benefits by not needing any compiler, server or database to serve the code. In practice, making changes and debugging the changes is the only real work being done. The rest is setting up the project, tools and version control.

##### Use Case # 2

*Develop a markdown document locally and push the document to Github for online viewing.*

After acclimating to my new environment and armed with notes from my setup, I wanted to create a guide on Github for my own reference in the future and for the possible benefit of others.

- Open project in Atom.
- In Firefox, navigate to the web address (on Github) for the markdown file you are editing. For example, if you were editing the repository README file, you would navigate to  ```http://github/[username]/[repo_name]/README.md``` to view the README file for the repository.
- Make changes to the project in Atom. DO REAL WORK HERE.
- Save changes in Atom ```ctrl``` + ```s```.
- Commit changes to your working branch ```$ git commit -am "Edit File X"```.
- Push your branch to the remote repo on Github ```$ git push```. Use password authentication.
- Reload the markdown file on Github in Firefox ```ctrl``` + ```r```.
- Inspect the markdown formatting for expected output. THE OTHER REAL WORK IS HERE.

Since the markdown needs to be compiled to html, we will just let Github handle that for us. By committing our changes and pushing them to Gitub, we can inspect the html display of our markdown file. Like the first workflow, the only real work being done here is making changes and inspecting the output of those changes, in this case, html.

Firebug may still be used for inspecting the html, but when I review markdown developed in this manner, I employ an editing process focused on reading the document more than a debugging process focused on inspecting it with Firebug.

##### Bonus Points to Turbocharge Your Workflow

Use ```super``` + ```tab``` to switch between programs in your workflow. While holding down on ```super```, each press of the ```tab``` key will cycle to the next program in the dock. ```super``` + ```shift``` + ```tab``` will cycle through the programs in reverse order.

### Conclusion

For a new user to Ubuntu with a fresh install, it does not take long to set up the minimum tools to work collaboratively on a project managed under git, and this setup is mindful of a usable workflow.

This workflow could be improved significantly with a couple more steps. The next step would be setup SSH to handle Github authentication. Then, I would remap the ```caps lock``` key to be another ```ctrl``` key. That's my happy-place for a basic workflow setup and what I intend to do in a persistent Ubuntu environment.
