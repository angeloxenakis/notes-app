User.destroy_all
Folder.destroy_all
Note.destroy_all

User.create(username: "bob", password: "123")
User.create(username: "bill", password: "123")

Folder.create(name: "Personal Planning", user_id: User.first.id)
Folder.create(name: "Reminders", user_id: User.first.id)
Folder.create(name: "Personal Planning", user_id: User.second.id)

Note.create(
    folder_id: Folder.first.id, 
    title: "Important Note", 
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Maecenas sed enim ut sem. At elementum eu facilisis sed odio. Leo a diam sollicitudin tempor id eu."
)

Note.create(
    folder_id: Folder.first.id, 
    title: "A Cool Note", 
    content: "Mattis pellentesque id nibh tortor. Orci sagittis eu volutpat odio facilisis mauris. Iaculis eu non diam phasellus vestibulum lorem sed. Ullamcorper eget nulla facilisi etiam. Eget magna fermentum iaculis eu non diam phasellus vestibulum lorem. Ac orci phasellus egestas tellus rutrum tellus. Erat velit scelerisque in dictum non. "
)
Note.create(
    folder_id: Folder.first.id, 
    title: "Important Note", 
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Maecenas sed enim ut sem. At elementum eu facilisis sed odio. Leo a diam sollicitudin tempor id eu."
)
Note.create(
    folder_id: Folder.second.id, 
    title: "Important Note", 
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Maecenas sed enim ut sem. At elementum eu facilisis sed odio. Leo a diam sollicitudin tempor id eu."
)
Note.create(
    folder_id: Folder.third.id, 
    title: "Important Note", 
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Maecenas sed enim ut sem. At elementum eu facilisis sed odio. Leo a diam sollicitudin tempor id eu."
)
