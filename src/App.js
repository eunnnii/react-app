import useAxios from 'axios-hooks';
import { useEffect } from 'react';
import './App.css';

function App() {
  const [{data, loading, error},refetch] = useAxios('http://localhost:5500/',{
    headers: {
        'Access-Control-Allow-Origin': '*', 
        withCredentials: true,
        mode: 'cors'
    }});
 const [{postdata, },postData] = useAxios({
  url:'http://localhost:5500/v1/table',
  method: 'POST'
}, {
  headers: {
    'Access-Control-Allow-Origin': '*', 
    withCredentials: true,
    mode: 'cors'
}
 }) 
  useEffect(()=>{
    refetch();
    console.log(data);
  },[])
  return (
    <div className="App">
       <div className="root">
        <div className="top-wrapper">
            <div className="title">{data}</div>

            <div className="top-box">
                <div className="input-box">
                    <input/>
                </div>
                <div className="btn-box">
                    <a onClick={()=>{
                      postData().then((res)=> {
                      console.log('post:',res.data)
                    }).catch((err)=> {
                      console.log(err)
                    })}}> 추가하기 </a>
                </div>
            </div>
        </div>
        <div class="tablelist-wrapper">
            <table>
                <tr>
                <th>Company</th>
                <th>Contact</th>
                <th>Country</th>
                </tr>
                <tr>
                <td>Alfreds Futterkiste</td>
                <td>Maria Anders</td>
                <td>Germany</td>
                </tr>
                <tr>
                <td>Centro comercial Moctezuma</td>
                <td>Francisco Chang</td>
                <td>Mexico</td>
                </tr>
                <tr>
                <td>Ernst Handel</td>
                <td>Roland Mendel</td>
                <td>Austria</td>
                </tr>
                <tr>
                <td>Island Trading</td>
                <td>Helen Bennett</td>
                <td>UK</td>
                </tr>
                <tr>
                <td>Laughing Bacchus Winecellars</td>
                <td>Yoshi Tannamuri</td>
                <td>Canada</td>
                </tr>
                <tr>
                <td>Magazzini Alimentari Riuniti</td>
                <td>Giovanni Rovelli</td>
                <td>Italy</td>
                </tr>
                <tr>
                    <td>Magazzini Alimentari Riuniti</td>
                    <td>Giovanni Rovelli</td>
                    <td>Italy</td>
                    </tr>
                    <tr>
                        <td>Magazzini Alimentari Riuniti</td>
                        <td>Giovanni Rovelli</td>
                        <td>Italy</td>
                        </tr>
            </table>
        </div>
    </div>
    </div>
  );
}

export default App;
