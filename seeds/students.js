exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('students').del()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([
        { id: 881, student_name: 'bambam', img_url: 'https://images.unsplash.com/photo-1543869664-290274af6667?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80', slack_id: 'bambam-slack' },
        { id: 882, student_name: 'ihaka', img_url: 'https://st1.bollywoodlife.com/wp-content/uploads/2018/12/Jason-Momoa-1.png', slack_id: 'ihaka-slack' },
        { id: 883, student_name: 'brad', img_url: 'http://wallpaperlepi.com/wp-content/uploads/2014/11/Young-Brad-Pitt-Wallpaper-Desktop.jpg', slack_id: 'brad-slack' },
        { id: 884, student_name: 'raj', img_url: 'https://cdn.pastemagazine.com/www/articles/DevPatel_ThomasLohnes_Getty_main.jpg', slack_id: 'raj-slack' },
        { id: 885, student_name: 'philipj', img_url: 'https://amp.businessinsider.com/images/596639277ba13637b153bf57-640-480.jpg', slack_id: 'philipj-slack' },
        { id: 886, student_name: 'paul', img_url: 'http://freeios7.com/wp-content/uploads/freeios7.com_apple_wallpaper_arnold-hulk_iphone4.jpg', slack_id: 'paul-slack' }
      ])
    })
}
