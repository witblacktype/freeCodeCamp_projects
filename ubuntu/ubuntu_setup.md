Fast Development Setup in Ubuntu to Start Working Now
=====================================================

If you found this from a search, the following few sections describe the reasoning behind why this was valuable to me and how it might be valuable to you. I hope it helps. Otherwise, skip this silliness and get to the setup [11 Steps](#11-steps)

### Starting Point

These are the basic assumptions I am using to direct my workflow and tooling.

+ I have a WiFi network available and the proper credentials to connect to the network.
+ The project I want to work on is on Github and password authentication is acceptable for transmission.
+ I am comfortable entering commands into the terminal and have a solid understanding of all commands being invoked with sudo.
+ I do not need a GUI for managing my projet with git.
+ My project does not need any compiler or pre-compiler.
+ My project will be able to be served locally by Firefox (ie. there are no server or database requirements for running my project).

### My Relevant Background

I have used Ubuntu before to download and use an IDE for coding C++ in a math class. My experience in Ubuntu or any Linux distribution is close to zero. I have never used any Linux distribution since acquiring any skills on a command line. I acquired my basic Unix-like skills in OS X on the command line knowing the transferability of the skills and the accessibility of tools like the bash shell and git across various Unix-like operating systems.

### My Motivation

I

## <a id="11-steps"></a>11 Steps to Start Working on a Github hosted project from a clean install of Ubuntu

### Adjust screen resolution

I found the default screen resolution uncomfortably small. Check the current resolution and available resolution settings.  The command ```xrandr``` with no arguments will list the screen resolutions available and information about your screen settings.

    $ xrandr

The asterisk ```*``` marks the current resolution. The marks ```+``` the recommended resolution(s).

Passing the size ```-s``` option we can set the resolution to our choice.

    $ xrandr -s 1920x1200

I find this more comfortable without feeling 'big' on my 13" Macbook than the recommended resolution of ```2560x1600```.

Docs: The man pages. Run the following command in the shell to access them.

    $ man xrandr

### Connect to WiFi

Once severe eyestrain has been relieved, we need to access valuable things from the outside world. Let's setup your WiFi connection.

Open the system settings from the dock. It's the gear and wrench icon. Select Software and Updates and select the Additional Drivers tab. Wait for any available drivers to be located. Select the driver provided and Apply Changes.

Select the WiFi icon in the upper dock. It is the signal icon that looks like a piece of pie. Selecting on it, you should see a list of visible WiFi networks in range. If you do not, I found that toggling the selected driver off and back on solved the trick on more than one occasion.

Select your desired network and authenticate as necessary. Open Firefox and navigate to a website to verify that you can connect to the internet resources.

Navigate to [Firebug](http://getfirebug.com/) ```http://getfirebug.com/``` in Firefox.

Keep an eye on the WiFi icon in the upper right corner. It's appearance indicates whether your computer is connected to a WiFi signal and the strength of the signal if connected to a network.

If you connected to the Firebug homepage, you have an internet connection through your WiFi configuration and the Firebug page is not experiencing a service interruption. You are ready to move on.

If you did not connect to the Firebug page with the available link to download, try to navigate to a site like [Google](google.com) ```google.com``` or [Mozilla](mozilla.org) ```mozilla.org```. If you could not access either of these, select the WiFi icon in the upper right corner to inspect the available networks and begin troubleshooting. This is not a troubleshooting guide and I would recommend using the [RSAP](http://www.freecodecamp.com/field-guide/how-do-i-get-help-when-i-get-stuck) method to the best of your ability to solve your connection problem.

Link to RSAP method to problem solving: http://www.freecodecamp.com/field-guide/how-do-i-get-help-when-i-get-stuck

Text-only links have been provided in addition to the linsk to this point for you to easily read the url's considering that you might be reading this from a device other than the one running Ubuntu that you are setting up. Once your internet connection is established, open this guide in Firefox on your Ubuntu machine: [Ubuntu Setup](https://github.com/witblacktype/freeCodeCamp_projects/blob/master/ubuntu/ubuntu_setup.md) https://github.com/witblacktype/freeCodeCamp_projects/blob/master/ubuntu/ubuntu_setup.md.

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

Once I figured out that the shortcut ```ctrl``` + ```tab``` did, in fact, cycle through programs, albeit differently from OS X, I rearranged my dock to prioritize my dev tools for a faster workflow. Click and hold on an item in the dock to enable drag-and-drop it in the desired dock position.

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

### It is good practice to create your own branch

I imagine that if Linus Torvalds were here, he would point out how much our code sucks. He would also show us how we could work with our sucky code in a little corner and not disturb the more gifted among us. Create your own branch. Now your sucky code can live in it's own sucky world like my code. If your code doesn't suck, other people may care.

    $ git checkout -b iSuck

Now no one will mess with your branch. If your code is actually good, you can just create a new branch called something more dignified. However, you would already know how to do that and this guide might be a total waste of your time, but I digress.

If you suck, embrace the suck. Before long, you will suck much less.

### Open your project in Atom and start working

    $ cd ~
    $ atom [repo_name]

### Conclusion

On a fresh install of Ubuntu it does not take long to set up the minimum tools to work collaboratively on a project managed under git.
