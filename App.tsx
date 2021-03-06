import React from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import Styles from './AppStyles'
import Amplify, { API, graphqlOperation } from 'aws-amplify'
import { createTodo } from './src/graphql/mutations'
import { listTodos } from './src/graphql/queries'
import awsExports from './src/aws-exports'
Amplify.configure(awsExports)


export default function App() {
  return (
    <View>
      <Text>Open up App.tsx to start working on your app!</Text>
    </View>
  );
}

