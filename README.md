# NoteTakingApp
A simple note-taking application built using Python that allows users to create, view, and manage notes .

File_name = "mynotes.txt" 

def show_menu ():
    print ("\n---NoteTakingApp---")
    print ("1.Add a new note")
    print ("2.View all the note")
    print ("3.Delete all new note")
    print ("4.Exit")

def add_note ():
    note = (input("Enter your note:"))
    with open (File_name,"a") as file:
        file.write(note + "\n")
    print ("Note added Successfully!")


def view_note ():
    try:
        with open (File_name,"r") as file:
            content= file.read()
            if content:
                print ("\n---Your notes---")
                print (content)
            else:
                print ("No notes found.")
    except FileNotFoundError:
        print ("No notes found.")

def delete_notes ():
    confirm = (input("Are you sure you want to delete all the notes? (yes/no):"))
    if confirm.lower() == "yes":
        with open (File_name,"w") as file:
            pass                             #pass overwrites an empty file
        print ("All notes deleted successfully")
    else:
        print ("Deletion Cancelled ")

while True:
    show_menu ()
    choice = (input("Enter your Choice (1 - 4):"))

    if choice == "1":
            add_note()
    elif choice == "2":
            view_note()
    elif choice == "3":
            delete_notes()
    elif choice == "4":
         print ("Exiting Note-Taking App.Goodbye!")
         break
    else:
         print ("Invalid choice please enter a number between (1 - 4).")

