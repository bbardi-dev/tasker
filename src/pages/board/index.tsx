//TODO: Support multiple boards for user, multiple users being able to join a single board

import Board from '../../components/Board/Board'
interface Props {
}

export default function BoardPage({data}: Props) {
  
  return <div>
   <Board data={data}/>
  </div>
}


export async function getServerSideProps(){
    const {tasks} = await import ('../../../.data/tasks.json')
    return{
      props:{
        data : tasks
      }
    }
}