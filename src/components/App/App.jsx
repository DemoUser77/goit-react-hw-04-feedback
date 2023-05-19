import React from 'react';
import { Section } from 'components/Section/Section';
import { Statistics } from 'components/Statistics/Statistics';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions'
import { Notification } from 'components/Notification/Notification';
import { Container } from 'components/App/App.styled';


export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };
  
  onClick = (event) => {
    const value = event.currentTarget.textContent;
    this.setState(prevState => ({
      [value]: prevState[value] + 1,
    }))
   }
  
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
  
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };
  render() {
    const { good, neutral, bad } = this.state;
   

    return (
      <Container>
     <Section title="Please leave feedback">
          <FeedbackOptions 
          options= {Object.keys(this.state)}
          onLeaveFeedback= {this.onClick} />
        </Section>
      
        <Section title="Statistics">
           {this.countTotalFeedback() > 0 ? (
        <Statistics 
        good={good}
        neutral={neutral}
        bad={bad}
        total={this.countTotalFeedback()}
        positivePercentage={this.countPositiveFeedbackPercentage()} />    
) 
            : (<Notification message="There is no feedback" />
            )}
        </Section>
     </Container>
    );
  };
};







 
