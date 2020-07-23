import { SDKService } from './SDKService'

import React, { Component } from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native'

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      wallet: null,
      timeDifference: null
    }
  }

  async componentDidMount() {
    console.log('componentDidMount')

    const username = 'SUBSTITUTE_ME'
    const password = 'SUBSTITUTE_ME'
    const start = new Date()

    const wallet = await SDKService.signIn(username, password)

    const end  = new Date()
    const timeDifference = (end.getTime() - start.getTime()) / 1000
    console.log('Cognito SignIn finished in', `${timeDifference}s`)

    this.setState({ wallet, timeDifference })

    // console.log('App is initialized', wallet)
  }
  render() {
    const { wallet, timeDifference } = this.state

    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>

            { wallet && timeDifference &&

              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Completed in {timeDifference}s</Text>
                <Text style={styles.sectionDescription}>
                  As `{wallet.attributes.email}`
                </Text>
              </View>

            }
          </ScrollView>
        </SafeAreaView>
      </>
    )
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
})

export default App
