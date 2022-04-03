
function solve(input) {
            let command = ''
            // List<Guest> guests = new List<Guest>();
            let unlikes = 0;

            while ((command = Console.ReadLine()) != "Stop")
            {
                command = command.Split("-", StringSplitOptions.RemoveEmptyEntries);
                let commandType = commandArg[0];
                let guestName = commandArg[1];
                let meal = commandArg[2];

                if (commandType == "Like")
                {
                    if (!guests.Any(n => n.Name == guestName))
                    {
                        guests.Add(new Guest(guestName));
                    }

                    Guest [likeGuest] = SearchedGuest(guests, guestName);

                    if (!likeGuest.Meals.Contains(meal))
                    {
                        likeGuest.Meals.Add(meal);
                    }
                }
                else if (commandType == "Dislike")
                {
                    if (guests.Any(n => n.Name == guestName))
                    {
                        Guest [disLikeGuest ]= SearchedGuest(guests, guestName);

                        if (disLikeGuest.Meals.Contains(meal))
                        {
                            unlikes ++;
                            disLikeGuest.Meals.Remove(meal);
                            console.log(`${guestName} doesn't like the ${meal}.`);
                        }
                        else
                        {
                           
                            console.log(`${guestName} doesn't have the ${meal} in his/her collection.`);
                        }
                    }
                    else
                    {

                        console.log(`${guestName} is not at the party.`);
                    }
                }
            }

            foreach (Guest [guest] in guests)
            {

                console.log(`{guest.Name}: {string.Join(", ", guest.Meals)}`);
            }
         
            console.log(`Unliked meals: ${unlikes}`);

        }

         Guest SearchedGuest (List<Guest> guests, string guestName)
        {
           searchGuest = guests.hasOwnProperty(n => n.Name == guestName);
            return searchGuest;
        }
    }

    
         Guest[name] 
        {
            this.Name = name;
            this.Meals = meals;
        }

    }


solve(["Like-Krisi-shrimps",
"Like-Krisi-soup",
"Like-Penelope-dessert",
"Like-Misho-salad",
"Stop"])