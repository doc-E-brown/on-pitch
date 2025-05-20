import { useNavigate } from 'react-router'

export default function TeamRoute() {
  const navigate = useNavigate()

  const handleCreateNewTeam = () => {
    void navigate('new')
  }

  return (
    <div>
      <h1>On-Pitch</h1>
      <h2>Welcome to On-Pitch!</h2>
      <div>
        <button onClick={handleCreateNewTeam}>Create New Team</button>
      </div>
    </div>
  )
}
