import {useState}from 'react';
import Card from '../components/Card';
function Dashboard() {
  const [posts,setPosts] = useState([
    {
      "userId": 1,
      "id": 1,
      "title": "Are or make repel provide blinded except option reprehend",
      "body": "because and undertakes\ntakes upon the objections that follow expeditiously and when\nreprehends the annoyances as which all\nour things are but are things happen to the architect"
    },
    {
      "userId": 1,
      "id": 2,
      "title": "Who is being",
      "body": "is things in time of life\nsegui are nothing reprehensible pain blessed those pains neither\nflee flattery pleasure further or nothing annoyance as rejecting\nwho open not debts we can who neither unless nothing"
    },
    {
      "userId": 1,
      "id": 3,
      "title": "She repels troubles as if she were exercising herself or",
      "body": "and just but what right\npleasure blinded all choosing or to\npleasure pains or accusing who is born\nmoles further his hatred and work and wants or"
    },
    {
      "userId": 1,
      "id": 4,
      "title": "He is blind",
      "body": "any and often rejecting pleasure to obtain\nis love but assuming provide things blame\nwho here benefits do not know the thing is held pain and pain itself right\nwho are pleasure things there want"
    },])
  return (
    <div className='flex flex-col'>
      <span className='text-2xl text-left font-bold mx-4'>Posts</span>
      <div className="flex flex-wrap justify-center items-center">
        {
          posts.map((post)=>(
            <ul key={post.id}>
              <Card post={post}/>
            </ul>  
          ))
        }
      </div>
    </div>
    
  )
}

export default Dashboard