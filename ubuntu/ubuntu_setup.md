Fast Development Setup in Ubuntu to Start Working Now
=====================================================

11 Steps to Start Working on a Github hosted project from a clean install of Ubuntu
-----------------------------------------------------------------------------------
### Starting Point

These are the basic assumptions I am using to direct my workflow and tooling.

+ I have a WiFi network available and the proper credentials to connect to the network.
+ The project I want to work on is on Github and password authentication is acceptable for transmission.
+ I am comfortable entering commands into the terminal and have a solid understanding of all commands being invoked with sudo.
+ I do not need a GUI for managing my projet with git.
+ My project does not need any compiler or pre-compiler.
+ My project will be able to be served locally by Firefox (ie. there are no server or database requirements for running my project).

Personally, this is my first time working in a Linux distro when I have not been ignorant to a Unix-like environment. I developed my Unix-like skills in the Mac Terminal App using Bash. My Linux experience is close to none in general but my Unix-like experience is beyond that of a beginner.

### Adjust screen resolution

I found the default screen resolution uncomfortably small. Check the current resolution and available resolution settings.  The command ```xrandr``` with no arguments will list the screen resolutions available and information about your screen settings.

  $ xrandr

The asterisk ```*``` marks the current resolution. The marks ```+``` the recommended resolution(s).


#### My Solution

	$ xrandr



Passing the size ```-s``` option we can set the resolution to our choice.

  $ xrandr -s 1920x1200

I find this more comfortable without feeling 'big' on my 13" Macbook than the recommended resolution of ```2560x1600```.

Docs: The man pages. Run the following command in the shell to access them.

  $ man xrandr

### Connect to WiFi

Once severe eyestrain has been relieved, we need to access valuable things from the outside world. Let's setup your WiFi connection.

Open the system settings from the dock. It's the gear and wrench icon. Select Software and Updates and select the Additional Drivers tab. Wait for any available drivers to be located. Select the driver provided and Apply Changes.

Select the WiFi icon in the upper dock. It is signal design that looks like a piece of pie. You should see the visible WiFi networks in range. If you do not, I found that toggling the selected driver off and back on solved the trick on more than one occasion.

Select your desired network and authenticate as necessary. Open Firefox and navigate to a website. Keep an eye on the WiFi icon in the upper right corner. It's appearance indicates whether your computer is connected to a WiFi signal and the strength of the signal if connected to a network.

### Install Firebug for a Browser Debugging Tool

Open Firefox and download Firebug.
Install the extension.

### Update the package manager

Welcome to your Ubuntu package manager apt-get. It will install, update, configure, and remove programs. First thing is to update it.

  $ sudo apt-get update

### Install Development Tools  

Now we can install the programs we need using apt-get. My two primary tools will be git and a text editor. Let's get git first. Say that ten times fast.

  $ sudo apt-get install git

I will use Atom as my text editor because it is free, easy to acquire (courtesy of webupd8.org) and 'hackable'. 'Hackable' has to mean it is awesome, right? I had never used it myself before this setup.

  $ sudo add-apt-repository ppa:webupd8team/atom

  $ sudo apt-get update

  $ sudo apt-get install atom

### Rearrange the dock

Once I figured out that the shortcut ```ctrl``` + ```tab``` did in fact cycle through programs, albeit differently from OS X, I rearranged my dock to prioritize my dev tools for a faster workflow.

##### From the Top
- Search - a seemingly immovable object
- Firefox
- Atom
- Terminal
- Files
- whatever else down here doesn't matter

### Clone a Project to work on

Let's keep it simple. This project will live in your home.

  $ cd ~

  $ git clone https://github.com/[github_username]/[repo_name].git

### Configure the upstream branch

First, run the following command to see the details of the remote repositories.

  $ git remote -v

The verbose ```-v``` option displays the details in addition to the names of the remotes.

Run the following command to add the upstream branch.

  $ git remote add upstream https://github.com/[github_username]/[repo_name].git

If you run ```git remote -v``` again, you will now see the upstream branch as well.

### Open your project in Atom and start working

  $ cd ~

  $ atom [repo_name]

### Conclusion

On a fresh install of Ubuntu it does not take long to set up the minimum tools to work collaboratively on a project managed under git.
