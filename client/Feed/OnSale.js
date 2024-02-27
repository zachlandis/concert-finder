import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOnSaleEvents } from '../Redux/Actions/getOnSaleActions';

function OnSale() {
  const dispatch = useDispatch();
  const onSaleEvents = useSelector((state) => state.onSaleEvents.onSaleEvents);

  useEffect(() => {
    dispatch(fetchOnSaleEvents());
  }, [dispatch]);
  
  // const formatDateForComparison = (date) => {
  //   return date.toISOString().split('.')[0] + "Z"; 
  // };

  // const todayFormattedForComparison = formatDateForComparison(new Date());
  // const twoWeeksAgoFormattedForComparison = formatDateForComparison(new Date(new Date().setDate(new Date().getDate() - 14)))
  // const filteredEvents = onSaleEvents.filter(event => {
  //   const eventSaleStartDateFormatted = formatDateForComparison(new Date(event.sales.public.startDateTime));
  //   return eventSaleStartDateFormatted <= todayFormattedForComparison
  // });


  // useEffect(() => {
  //   console.log(filteredEvents)
  // }, [])

  return (
    <ScrollView>
      <Text>On Sale Events in the Last 14 Days:</Text>
      {onSaleEvents.map((event, index) => (
        <View 
          key={index}
          style={styles.container}
        >
          <Text>{event.name} - Sale Start: {event.sales.public.startDateTime}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    container: {
        borderColor: '#000',
        borderWidth: 1,
        margin: 10,

    }
})

export default OnSale;
