import React,{useState} from "react";
import { View,Text, FlatList,StyleSheet, Alert, TouchableHighlight } from "react-native";
import HeaderComp from "./src/components/headerComp/index"
import FooterComp from "./src/components/footerComp";
import TodoCard from "./src/components/toDoCard"


const App = () => 
{
  const [list,setList] = useState([])
  const [number,setNumber] = useState(0)
  const [value,setValue] = useState("")

  const onPressButton = () => {
    if (value === "")
      return Alert.alert("Boş geçemezsiniz")
    setNumber(number+1)
    const deger = 
    {
      id:number,
      title:value,
      isDeleted:false
    }
    setList([...list,deger])
    console.log(deger)
    setValue("")
    }

    const renderToDo = ({item,index}) =>
    {
      return(
      <TouchableHighlight onLongPress={()=>{handleLongPress(item.title,index)}}>
        <TodoCard value={item}></TodoCard>
      </TouchableHighlight>
      )
    }

    const handleLongPress = (title,index) => {
      Alert.alert("Task silindi",'"' + title+'"'+ " silindi")
      const newTask = [...list]
      newTask.splice(index,1)
      setList(newTask)
      setNumber(number-1)
    };
    
  return (
    <View style={style.container}>
      <HeaderComp number={number}></HeaderComp>
      <FlatList data={list} renderItem={renderToDo}></FlatList>
      <FooterComp settext={setValue} text={value} press={onPressButton}></FooterComp>
    </View>
  )

}

export default App;

const style = StyleSheet.create({
  container:{flex:1}
})