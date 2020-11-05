from dotenv import load_dotenv
load_dotenv()

from starter_app import app, db
from starter_app.models import User, Digimon

with app.app_context():
  db.drop_all()
  db.create_all()

#####################################################################################
# USERS                                                                             #
#####################################################################################

  ian = User(username = 'Ian', email = 'ian@aa.io', password = 'password')
  javier = User(username = 'Javier', email = 'javier@aa.io', password = 'password')
  dean = User(username = 'Dean', email = 'dean@aa.io', password = 'password')
  angela = User(username = 'Angela', email = 'angela@aa.io', password = 'password')
  soonmi = User(username = 'Soon-Mi', email = 'soonmi@aa.io', password = 'password')
  alissa = User(username = 'Alissa', email = 'alissa@aa.io', password = 'password')

  db.session.add(ian)
  db.session.add(javier)
  db.session.add(dean)
  db.session.add(angela)
  db.session.add(soonmi)
  db.session.add(alissa)


######################################################################
# DIGIMON                                                            #
######################################################################

  argomonB = Digimon(name="Argomon Baby", level="Baby", next_form=["Argomon In-Training"], bio="Argomon (Baby) is a Mutant Digimon. It is a Fresh Digimon born from a bug in an algorithm/computational program. It has a habit of finding and converging at places where high-capacity data leaks out. They gather one by one, growing into a horde and blanketing it.")
  botamon = Digimon(name="Botamon", level="Baby", next_form=["Koromon", "Wanyamon"], bio="Botamon is a Slime Digimon. It was just born recently, and on the surface of its slime-shaped body, it has grown thick, black fuzz. It is unable to battle as it has just been born.")
  chibomon = Digimon(name="Chibomon", level="Baby", next_form=["DemiVeemon"], bio="Chibomon is a Slime Digimon, and as such, it is small and young. It is a small, blue-colored, Dragon Digimon child, and although it is small and powerless, it has the potential to digivolve to every Dragon Digimon. For that reason, it is a Digimon that is considered exceedingly valuable by tamers and researchers of Dragon Digimon. It is cherished due to its personality of friendliness and overflowing curiosity, characteristic of Fresh Digimon. Just like other Fresh Digimon, it spits acidic bubbles to attack, but as usual, their power is nonexistent.")
  conomon = Digimon(name="Conomon", level="Baby", next_form=["Kokomon"], bio="Conomon is a Slime Digimon. Conomon and Zerimon are extremely rare Digimon which are born in pairs from a single Digi-Egg. The reason why only Zerimon and Conomon are born as twins is unclear at the present stage. Moreover, they are not restricted to always being born as twins, and either a Zerimon or Conomon may be born from a single Digi-Egg. Compared to the extremely energetic, one-horned Zerimon, the three-horned Conomon has a relatively docile personality. Like other Fresh Digimon, it spits acid bubbles to intimidate opponents.")
  dodomon = Digimon(name="Dodomon", level="Baby", next_form=["Dorimon", "Wanyamon"], bio="Dodomon is a Slime Digimon and a carrier of the X Antibody. Its whole body is covered in a tough fur named 'Mithril Hair'. It manifests an aggressive personality immediately after being born, and despite its fangs not yet being grown, it opens its mouth wide and completely intimidates the opponent with the manner in which it snaps at them. Because of this, there exist many Digimon which are completely deceived, but it is still a rare Digimon.")
  jyarimon = Digimon(name="Jyarimon", level="Baby", next_form=["Gigimon"], bio="Jyarimon is a Slime Digimon. It is an extremely scarce Digimon, whose population is small. The Fresh-levels of Dragon-species Digimon are small in absolute number, and it is said that most of them are captured or die before they grow up. You wouldn't know it to look at it, but there are tiny, closely packed fangs growing within its mouth, and it is foreseen that it will grow into a powerful Dragon-species Digimon. Although it is powerless, it has the disposition to face those with bodies larger than its own, and that becomes the reason for its low survival rate.")
  keemon = Digimon(name="Keemon", level="Baby", next_form=["Yaamon"], bio="Keemon is a Slime Digimon. It is an evil-eyed Digimon which is always scowling. Though it's very young, it hates being crowded by others, and lives in hiding. It likes poking its nose out of hiding and harassing with its 'Pushū'.")
  mokumon = Digimon(name="Mokumon", level="Baby", next_form=["DemiMeramon"], bio="Mokumon is a Smoke Digimon. It is a Digimon Baby which envelops its body with a smoke-like vapor. It is a unique Digimon whose DigiCore is bare, so it seems it covers its DigiCore with Smoke in order to protect it, and has an unusual way of life. Because the Smoke was generated when its DigiCore was burned, it seems it is harmful neither to Mokumon itself nor to others. Also, because it is still in the middle of digivolving, when it encounters an opponent, it immediately flees. Then, it scatters the Smoke issuing from its body all around, and seizes the opportunity to escape when the opponent loses sight of it. As stated earlier, because it isn't particularly harmful, if you happen to see one, it would be best to be quiet")
  argomonI = Digimon(name="Argomon In-Training", level="In-Training", previous_form = ["Argomon Baby"], next_form=["Argomon Rookie"], bio="Argomon (In-Training) is a Mutant Digimon. It is the form that a newborn Argomon grows into. It is attached to places where large volumes of data flow and consumes that data through the mouth on its underside. It is a creepy one-eyed Digimon with a green body and tentacles that stretch out like arms. Since it's In-Training, it's still very weak, but it's up to some sort of evil and bringing a bad influence to the Real World...!")
  koromon = Digimon(name="Koromon", level="In-Training", previous_form = ["Botamon"], next_form=["Agumon", "Guilmon", "ToyAgumon", "Dracomon", "Hackmon", "Shoutmon"], bio="Koromon is a Lesser Digimon. It is a tiny Digimon that shed the fuzz covering its surface, and whose body grew even bigger. Although it has become able to move around more actively, it is still unable to battle. It can produce bubbles from its mouth to intimidate opponents.")
  wanyamon = Digimon(name="Wanyamon", level="In-Training", previous_form = ["Botamon", "Dodomon"], next_form=["Bearmon", "Dorumon", "Gaomon", "Kudamon", "Ryudamon"], bio="Wanyamon is a Lesser Digimon. It is a Digimon fused from the data of small, pet animals like dogs and cats. Because its unexpected movements are also quick, caution is necessary so that it doesn't get away, but it becomes very emotionally attached if shown affection like a pet.")

  db.session.add(argomonB)
  db.session.add(botamon)
  db.session.add(chibomon)
  db.session.add(conomon)
  db.session.add(dodomon)
  db.session.add(jyarimon)
  db.session.add(keemon)
  db.session.add(mokumon)
  db.session.add(argomonI)
  db.session.add(koromon)
  db.session.add(wanyamon)


  db.session.commit()
