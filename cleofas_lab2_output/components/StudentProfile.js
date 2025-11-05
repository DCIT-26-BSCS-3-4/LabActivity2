import { Text, View, StyleSheet } from 'react-native'
import { Card } from 'react-native-paper';
import { FontAwesome, FontAwesome6 } from '@expo/vector-icons';

/**What to include :
 * Name:
 * Age:
 * Course/Year/Section:
 * About me:
 * Achievements:
 * Skills:
 */

let name = "John Roman T. Cleofas";
let age = "19 Years Old";
let course = "Bachelor of Science in Computer Science" ;
let about = "I enjoy listening to music and creating digital art. I hope to hone and expand my skills more as years pass by.";
let achievements = ["With Honors (Grade 6 to 11)", "Graduated Senior High School with High Honors (Grade 12)"];
let skills = ["Web Development", "Digital Art"]


export function Header() {
  return (
    <Card style={styles.card}> 
      <View style={styles.header}>
      <View style={{width: 5,height: '50%',backgroundColor: '#ebcb63',borderRadius: 99,}}>
      </View> {/*Vertical rounder bar*/}
        <Text style={styles.headerTitle}> Student Profile</Text>
      </View>
    </Card>
    
  );
}

export function BasicInfo() {
  return (
    <Card style={styles.card}> 
      <View style={styles.container}>      
          <View style={styles.photoContainer}>
              <FontAwesome name="user-circle" size={80} color={"#5f66b3"} />
          </View>
          <View style={styles.basicInfo}>
            <Text style={styles.paragraph, {fontWeight: 'bold', fontSize: 20}}>{name}</Text>
            <Text style={styles.paragraph, {fontWeight: '500', color: '#404d4a'}}>{age}</Text>      
            <Text style={styles.paragraph, {fontWeight: '500', color: '#404d4a'}}>{course}</Text>
          </View>
        </View>
    </Card>
    
  );
}

export function AboutMe() {
  return(
    <Card style={styles.card}> 
      <View style={styles.container}>      
        <View style={styles.sectionContainer}>
        <View style={styles.labelIcon}>
          <Text style={styles.label}>About Me</Text>
          <FontAwesome6 name="feather-pointed" size={18} color={"#5f66b3"} />
        </View>
          
          <Text style={styles.content}>{about}</Text>
        </View>
      </View>
    </Card>
    
  );
}

export function Achievements() {
  return(
    <Card style={styles.card}> 
      <View style={styles.container}>      
        <View style={styles.sectionContainer}>
          <View style={styles.labelIcon}>
            <Text style={styles.label}>Achievements</Text>
            <FontAwesome6 name="feather-pointed" size={18} color={"#5f66b3"} />
          </View>
          {/*Display the achievements in a bulleted list*/}
          {achievements.map((achievement, index) => (
            <Text style={styles.content} key={index}>{'\u2022'} {achievement}</Text>
          ))}
        </View>  
      </View>
    </Card>
    
  );
}

export function Skills() {
  return(
    <Card style={styles.card}> 
      <View style={styles.container}>      
        <View style={styles.sectionContainer}>
          <View style={styles.labelIcon}>
            <Text style={styles.label}>Skills</Text>
            <FontAwesome6 name="feather-pointed" size={18} color={"#5f66b3"} />
          </View>
          {/*Display skills in capsules*/}
          <View style={ {flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginTop: 10}}>
            {skills.map((skill, index) => (
            <View>
              <Text style={styles.capsule} key={index}> {skill}</Text>
            </View>
            
          ))}
          </View>
          
        </View>
      </View>
    </Card>
  );
}


const styles = StyleSheet.create({

  //Header Container
  header: {
    height: 50,
    paddingLeft: 15,
    backgroundColor: '#3f2b6e',
    flexDirection: 'row' ,
    alignItems:'center', 
    gap: 5
  },

  //"Student Profile" Header
  headerTitle: {
    color: '#f0ebc9',
    letterSpacing: 0.5,
    fontSize: 20,
    fontWeight: 'bold',
  },

  //Card
  card: {
    borderRadius: 15,
    overflow: 'hidden',
    width: '100%',
    borderColor: '#b89337',
    borderWidth: 1
  },

  //Layout per container
  container: {
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fcfaf2'  
  },

  //Top Container
  photoContainer: {
    marginBottom: 8,
  },

  basicInfo: {
    alignItems: 'center',
    marginTop: 10,
    gap: 5
  },

  //Other Sections
  sectionContainer: {
    alignSelf: 'flex-start',
    marginVertical: 6
  },

  label: {
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    color: '#404d4a',
    marginBottom: 5
  },
  labelIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15
  },

  capsule: {
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    textAlign: 'center',
    backgroundColor: '#163c6e',
    color: '#e1edfc',
    fontWeight:'bold'
  },

  content: {
    textAlign: 'left',
    fontSize: 14,
    lineHeight: 20,

  },

  paragraph: {
    marginTop: 0,
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'start',
    color: '#404d4a'
  },



});