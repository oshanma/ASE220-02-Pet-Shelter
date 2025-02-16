const petsData=[
  {
    "type": "Dog",
    "breed": "Beagle",
    "sex": "Male",
    "color": "Tri-color (Black, Brown, White)",
    "spayedNeutered": "Yes",
    "age": 5,
    "animalID": 34621,
    "microchipNumber": "982000364789210",
    "image": "Beagles-pets.webp",
    "status": [
      "Health checked",
      "Vaccinations up to date",
      "Regularly dewormed",
      "Microchipped"
    ],
    "about": "Meet Baxter, a lovable Beagle with a knack for sniffing out fun! Baxter was rescued from a shelter and has blossomed into a friendly and outgoing boy. He loves long walks and has a keen sense of smell. He's great with kids and other dogs, making him the perfect family pet. His favorite pastime is chasing squirrels in the park and curling up for naps. Baxter is looking for a loving home where he can share his endless affection and playful spirit."
  },
  {
    "type": "Dog",
    "breed": "Golden Retriever",
    "sex": "Female",
    "color": "Golden",
    "spayedNeutered": "Yes",
    "age": 7,
    "animalID": 41382,
    "microchipNumber": "985112004567890",
    "image": "GoldenRetriever.jpeg",
    "status": [
      "Health checked",
      "Vaccinations up to date",
      "Regularly dewormed",
      "Microchipped"
    ],
    "about": "Sandy is a heartwarming Golden Retriever with a golden coat as bright as her personality. Rescued from a neglectful situation, she has shown incredible resilience and love for life. Sandy is great with children and other pets, making her an ideal family dog. She enjoys outdoor adventures, especially swimming and fetching. Sandy is looking for a forever home where she can spread her joy and love."
  },
  {
    "type": "Cat",
    "breed": "Siamese",
    "sex": "Male",
    "color": "Seal Point",
    "spayedNeutered": "Yes",
    "age": 2,
    "animalID": 62894,
    "microchipNumber": "981120025678902",
    "image": "Siamese.jpg",
    "status": [
      "Health checked",
      "Vaccinations up to date",
      "Regularly dewormed",
      "Microchipped"
    ],
    "about": "Oliver is a sleek Siamese cat with striking blue eyes and a seal point coat. Found wandering in a neighborhood, he's adapted well to shelter life but is eager for a permanent home. Oliver is vocal, expressing his thoughts freely, and enjoys interactive playtime. He's affectionate and loves to be close to his human companions, often following them around the house. Oliver would do best in a home where he can receive plenty of attention and love."
  },
  {
    "type": "Dog",
    "breed": "Labrador Retriever",
    "sex": "Male",
    "color": "Chocolate",
    "spayedNeutered": "Yes",
    "age": 4,
    "animalID": 47920,
    "microchipNumber": "985120031478902",
    "image": "Labrador Retriever.webp",
    "status": [
      "Health checked",
      "Vaccinations up to date",
      "Regularly dewormed",
      "Microchipped"
    ],
    "about": "Max is a charming Chocolate Labrador with a love for life and a tail that never stops wagging. Rescued from an overcrowded shelter, Max has shown immense gratitude and loyalty to his caregivers. He is full of energy and would thrive in a home with a backyard or regular access to outdoor activities. Max is great with children and other dogs, and he's always up for a game of fetch or a leisurely walk. His ideal home would be with an active family who can match his energy and zest for life."
  },
  {
    "type": "Cat",
    "breed": "Persian",
    "sex": "Female",
    "color": "White",
    "spayedNeutered": "Yes",
    "age": 6,
    "animalID": 58329,
    "microchipNumber": "981120036712345",
    "image": "Persian.jpg",
    "status": [
      "Health checked",
      "Vaccinations up to date",
      "Regularly dewormed",
      "Microchipped"
    ],
    "about": "Daisy is a stunning white Persian cat with a luxurious coat and gentle demeanor. She was surrendered by an owner who could no longer care for her. Daisy is a bit of a diva and loves being the center of attention. She enjoys being groomed and will happily sit in your lap for hours. She's not fond of loud noises or fast movements, so a quiet and calm household would be ideal. Daisy is looking for a loving home where she can be pampered and adored."
  },
  {
    "type": "Dog",
    "breed": "Dachshund",
    "sex": "Male",
    "color": "Dapple (Black and Gray)",
    "spayedNeutered": "Yes",
    "age": 3,
    "animalID": 49583,
    "microchipNumber": "982000367829101",
    "image": "Dachshund.jpg",
    "status": [
      "Health checked",
      "Vaccinations up to date",
      "Regularly dewormed",
      "Microchipped"
    ],
    "about": "Charlie is a spirited Dapple Dachshund with a playful personality. He was found as a stray and has since shown an incredible zest for life. Charlie loves exploring, whether it's a new trail or the corners of his home. He's a bit mischievous and enjoys hiding his toys. Charlie would do well in a home with an individual or family who enjoys fun and adventure. He's small but has a big heart and a lot of love to give."
  },
  {
    "type": "Dog",
    "breed": "German Shepherd",
    "sex": "Female",
    "color": "Black and Tan",
    "spayedNeutered": "Yes",
    "age": 4,
    "animalID": 50231,
    "microchipNumber": "982000365478219",
    "image": "Beagles-pets.webp",
    "status": [
      "Health checked",
      "Vaccinations up to date",
      "Regularly dewormed",
      "Microchipped"
    ],
    "about": "Luna is an intelligent German Shepherd with a loyal nature. Rescued from a working dog facility, she's well-trained and responds to basic commands. Luna enjoys mental stimulation through puzzle toys and thrives in an active household. She's protective of her family but gentle with children. Perfect for someone wanting both a companion and security buddy."
  },
  {
    "type": "Cat",
    "breed": "Maine Coon",
    "sex": "Male",
    "color": "Brown Tabby",
    "spayedNeutered": "Yes",
    "age": 5,
    "animalID": 51247,
    "microchipNumber": "985112367890123",
    "image": "Siamese.jpg",
    "status": [
      "Health checked",
      "Vaccinations up to date",
      "Regularly dewormed",
      "Microchipped"
    ],
    "about": "Thor is a majestic Maine Coon with tufted ears and a bushy tail. This gentle giant was surrendered due to housing changes. He's remarkably social for a cat, often greeting visitors at the door. Enjoys playing with feather toys and watching birds from windowsills. Would thrive in a home with cat trees and space to explore."
  },
  {
    "type": "Dog",
    "breed": "Poodle",
    "sex": "Female",
    "color": "Apricot",
    "spayedNeutered": "Yes",
    "age": 2,
    "animalID": 52468,
    "microchipNumber": "982000369871234",
    "image": "Beagles-pets.webp",
    "status": [
      "Health checked",
      "Vaccinations up to date",
      "Regularly dewormed",
      "Microchipped"
    ],
    "about": "Bella is a clever Standard Poodle with hypoallergenic curls. Former show dog retired due to minor ear infection history. Excels at agility training and loves water activities. Needs regular grooming and mental challenges. Ideal for allergy sufferers wanting an active, intelligent companion."
  },
  {
    "type": "Cat",
    "breed": "Ragdoll",
    "sex": "Female",
    "color": "Blue Bicolor",
    "spayedNeutered": "Yes",
    "age": 1,
    "animalID": 53692,
    "microchipNumber": "981120765432189",
    "image": "Siamese.jpg",
    "status": [
      "Health checked",
      "Vaccinations up to date",
      "Regularly dewormed",
      "Microchipped"
    ],
    "about": "Misty is a floppy Ragdoll kitten who lives up to her breed's name. Surrendered with her litter, she's the last needing a home. Adores being carried like a baby and will melt in your arms. Playful yet calm temperament. Perfect for first-time cat owners or families with gentle children."
  },
  {
    "type": "Dog",
    "breed": "Shiba Inu",
    "sex": "Male",
    "color": "Red",
    "spayedNeutered": "Yes",
    "age": 3,
    "animalID": 54781,
    "microchipNumber": "985113654789321",
    "image": "Beagles-pets.webp",
    "status": [
      "Health checked",
      "Vaccinations up to date",
      "Regularly dewormed",
      "Microchipped"
    ],
    "about": "Kuma is a fox-like Shiba Inu with an independent streak. Rescued from a puppy mill, he's learned to trust humans again. Clean habits and cat-like personality. Needs secure fencing as he's an escape artist. Best for experienced owners who appreciate his spirited nature."
  },
  {
    "type": "Cat",
    "breed": "Bengal",
    "sex": "Male",
    "color": "Spotted Rosetted",
    "spayedNeutered": "Yes",
    "age": 4,
    "animalID": 55842,
    "microchipNumber": "981123456789012",
    "image": "Siamese.jpg",
    "status": [
      "Health checked",
      "Vaccinations up to date",
      "Regularly dewormed",
      "Microchipped"
    ],
    "about": "Simba is an energetic Bengal with striking leopard-like spots. Former indoor/outdoor cat needing safer environment. Loves climbing to high places and playing with running water. Requires plenty of interactive toys. Would enjoy a home with cat wheels or enclosed catios."
  },
  {
    "type": "Dog",
    "breed": "Border Collie",
    "sex": "Female",
    "color": "Black and White",
    "spayedNeutered": "Yes",
    "age": 2,
    "animalID": 56987,
    "microchipNumber": "982000378912345",
    "image": "Beagles-pets.webp",
    "status": [
      "Health checked",
      "Vaccinations up to date",
      "Regularly dewormed",
      "Microchipped"
    ],
    "about": "Skye is a brilliant Border Collie with endless energy. Rescued from a farm, she's accustomed to herding animals. Needs job-like activities and space to run. Excels at frisbee catching and obstacle courses. Perfect for active owners or those interested in dog sports."
  },
  {
    "type": "Cat",
    "breed": "Sphynx",
    "sex": "Female",
    "color": "Pinkish White",
    "spayedNeutered": "Yes",
    "age": 5,
    "animalID": 57896,
    "microchipNumber": "985114567890123",
    "image": "Siamese.jpg",
    "status": [
      "Health checked",
      "Vaccinations up to date",
      "Regularly dewormed",
      "Microchipped"
    ],
    "about": "Cleo is a hairless Sphynx with velvety skin. Surrendered due to owner allergies. Loves warm laps and sweater weather. Requires weekly baths and ear cleaning. Affectionate clown who will entertain you with acrobatics. Needs indoor-only home with cozy blankets."
  },
  {
    "type": "Dog",
    "breed": "Corgi",
    "sex": "Male",
    "color": "Pembroke Red",
    "spayedNeutered": "Yes",
    "age": 6,
    "animalID": 58213,
    "microchipNumber": "982000389123654",
    "image": "Beagles-pets.webp",
    "status": [
      "Health checked",
      "Vaccinations up to date",
      "Regularly dewormed",
      "Microchipped"
    ],
    "about": "Winston is a cheerful Corgi with signature short legs. Retired therapy dog looking for quieter retirement home. Enjoys moderate walks and royal treatment. Great with seniors and calm children. His happy smile will brighten any room he enters."
  },
  {
    "type": "Cat",
    "breed": "British Shorthair",
    "sex": "Male",
    "color": "Blue",
    "spayedNeutered": "Yes",
    "age": 4,
    "animalID": 59324,
    "microchipNumber": "981125678901234",
    "image": "Siamese.jpg",
    "status": [
      "Health checked",
      "Vaccinations up to date",
      "Regularly dewormed",
      "Microchipped"
    ],
    "about": "Smokey is a plush British Shorthair with round copper eyes. Owner passed away, now seeking new family. Laid-back personality with occasional playful bursts. Enjoys watching TV with humans and batting at toy mice. Ideal for apartment living with quiet routines."
  },
  {
    "type": "Dog",
    "breed": "Husky",
    "sex": "Female",
    "color": "Gray and White",
    "spayedNeutered": "Yes",
    "age": 3,
    "animalID": 60245,
    "microchipNumber": "985115678912345",
    "image": "Beagles-pets.webp",
    "status": [
      "Health checked",
      "Vaccinations up to date",
      "Regularly dewormed",
      "Microchipped"
    ],
    "about": "Aurora is a vocal Husky with piercing blue eyes. Found as stray, likely escaped from backyard. Needs experienced owner familiar with escape-proofing. Loves pulling games and cold weather. Would excel at skijoring or sledding activities."
  },
  {
    "type": "Cat",
    "breed": "Scottish Fold",
    "sex": "Female",
    "color": "Silver Tabby",
    "spayedNeutered": "Yes",
    "age": 2,
    "animalID": 61578,
    "microchipNumber": "981126789012345",
    "image": "Siamese.jpg",
    "status": [
      "Health checked",
      "Vaccinations up to date",
      "Regularly dewormed",
      "Microchipped"
    ],
    "about": "Maisie is an owl-eyed Scottish Fold with folded ears. Bred responsibly but needs rehoming. Sweet-natured lap cat who enjoys gentle petting. Needs regular ear checks. Perfect for someone wanting a living stuffed animal companion."
  },
  {
    "type": "Dog",
    "breed": "Boxer",
    "sex": "Male",
    "color": "Fawn",
    "spayedNeutered": "Yes",
    "age": 5,
    "animalID": 62345,
    "microchipNumber": "982000398765432",
    "image": "Beagles-pets.webp",
    "status": [
      "Health checked",
      "Vaccinations up to date",
      "Regularly dewormed",
      "Microchipped"
    ],
    "about": "Rocky is a muscular Boxer with a heart of gold. Surrendered due to owner deployment. Loves play-fighting with rope toys and going for jogs. Great with older kids. His expressive face and wiggle-butt greetings will steal your heart."
  },
  {
    "type": "Cat",
    "breed": "Abyssinian",
    "sex": "Female",
    "color": "Ruddy",
    "spayedNeutered": "Yes",
    "age": 1,
    "animalID": 63579,
    "microchipNumber": "985116789123456",
    "image":"Siamese.jpg",
    "status": [
      "Health checked",
      "Vaccinations up to date",
      "Regularly dewormed",
      "Microchipped"
    ],
    "about": "Zara is a curious Abyssinian with ticked coat. Bred for show but retired early. Always investigating cupboards and high shelves. Needs vertical space and puzzle feeders. Perfect for someone wanting an interactive, dog-like feline."
  },
  {
    "type": "Dog",
    "breed": "Shih Tzu",
    "sex": "Male",
    "color": "White and Gold",
    "spayedNeutered": "Yes",
    "age": 8,
    "animalID": 64218,
    "microchipNumber": "982000401234567",
    "image": "Beagles-pets.webp",
    "status": [
      "Health checked",
      "Vaccinations up to date",
      "Regularly dewormed",
      "Microchipped"
    ],
    "about": "Mochi is a senior Shih Tzu with a royal strut. Owner entered assisted living. Prefers leisurely strolls and lap time. Requires daily eye cleaning. Sweet companion for retirees or homebodies wanting a low-energy buddy."
  },
  {
    "type": "Cat",
    "breed": "Russian Blue",
    "sex": "Male",
    "color": "Gray",
    "spayedNeutered": "Yes",
    "age": 3,
    "animalID": 65432,
    "microchipNumber": "981127890123456",
    "image": "Siamese.jpg",
    "status": [
      "Health checked",
      "Vaccinations up to date",
      "Regularly dewormed",
      "Microchipped"
    ],
    "about": "Sterling is a reserved Russian Blue with emerald eyes. Shy at first but deeply loyal once bonded. Hypoallergenic coat. Enjoys routine and quiet environments. Would thrive in calm household without young children."
  },
  {
    "type": "Dog",
    "breed": "Great Dane",
    "sex": "Female",
    "color": "Harlequin",
    "spayedNeutered": "Yes",
    "age": 4,
    "animalID": 66543,
    "microchipNumber": "985117891234567",
    "image": "Beagles-pets.webp",
    "status": [
      "Health checked",
      "Vaccinations up to date",
      "Regularly dewormed",
      "Microchipped"
    ],
    "about": "Freya is a gentle giant Great Dane. Former service dog candidate who didn't complete training. Loves leaning against people and thinks she's a lap dog. Needs space and orthopedic bed. Perfect for someone wanting a majestic but mellow companion."
  },
  {
    "type": "Cat",
    "breed": "Exotic Shorthair",
    "sex": "Female",
    "color": "Cream",
    "spayedNeutered": "Yes",
    "age": 2,
    "animalID": 67891,
    "microchipNumber": "981128901234567",
    "image": "Siamese.jpg",
    "status": [
      "Health checked",
      "Vaccinations up to date",
      "Regularly dewormed",
      "Microchipped"
    ],
    "about": "Peaches is a flat-faced Exotic Shorthair with teddy bear looks. Requires daily face cleaning. Playful yet low-energy. Adores feather wands and cardboard boxes. Ideal for someone wanting Persian-like cat without long fur maintenance."
  },
  {
    "type": "Dog",
    "breed": "Australian Shepherd",
    "sex": "Male",
    "color": "Blue Merle",
    "spayedNeutered": "Yes",
    "age": 1,
    "animalID": 68765,
    "microchipNumber": "982000412345678",
    "image": "Beagles-pets.webp",
    "status": [
      "Health checked",
      "Vaccinations up to date",
      "Regularly dewormed",
      "Microchipped"
    ],
    "about": "River is a striking Australian Shepherd puppy. Bred accidentally, needs active home. Highly trainable with herding instincts. Enjoys agility training and swimming. Will be best friend to someone who loves outdoor adventures."
  }
];










