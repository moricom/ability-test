import React, { Children } from 'react';
import ramen from '../img/ramen.png';
import styled from 'styled-components';
import fetchJsonp from 'fetch-jsonp';
import { type } from 'os';

interface zipResponseResult {
  address1: string; //"東京都"
  address2: string; //"杉並区"
  address3: string; //"荻窪"
  kana1: string; //"ﾄｳｷｮｳﾄ"
  kana2: string; //"ｽｷﾞﾅﾐｸ"
  kana3: string; //"ｶﾐｵｷﾞ"
  prefcode: string; //"13"
  zipcode: string; //"1670043"
}

interface zipResponse {
  message: null;
  results: zipResponseResult[];
  status: number;
}

const Page = styled.div`
  padding: 0.5rem;
  display: flex;
  justify-content: space-around;
  min-height: calc(100vh - 3rem);
  & * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const Container = styled.div`
  width: 30%;
  border: solid thin black;
  padding: 0 1rem 0 1rem;
`;

interface itemProps {
  select: boolean;
}

const Item = styled.div<{ select?: boolean }>`
  padding: 1rem 0 1rem 0;
  border: solid #bdbdbd;
  border-width: 0 0 1px 0;
  background: ${(props) => (props.select ? '#E3F2FD' : 'none')};
`;

const Preview: React.FC = () => {
  const [color1, setColor1] = React.useState(true);
  const [text1, setText1] = React.useState(true);
  const text1Data = {
    true: 'ボタンをクリックしてテキストを変更',
    false: '変更しました',
  };
  const [input1, setInput1] = React.useState('ユーザーの入力');
  const [bool1, setBool1] = React.useState(true);
  const [zip, setZip] = React.useState('1670043');
  const [address, setAddress] = React.useState('東京都杉並区上荻');
  const [s, setSelects] = React.useState({
    p: false,
    color: false,
    img: false,
    link: false,
    inline: false,
    jsColor: false,
    jQColor: false,
    bColor: false,
    bText: false,
    fAlert: false,
    mAlert: false,
    iText: false,
    bool: false,
    loop: false,
    obj: false,
    ajax: false,
  });

  return (
    <Page>
      <Container>
        <Item>
          <h3>HTML</h3>
        </Item>
        <Item
          select={s.p}
          onClick={() => {
            setSelects({ ...s, p: !s.p });
          }}
        ></Item>
        <Item
          select={s.color}
          onClick={() => {
            setSelects({ ...s, color: !s.color });
          }}
        >
          <p>文字色の変更</p>
        </Item>
        <Item
          select={s.img}
          onClick={() => {
            setSelects({ ...s, img: !s.img });
          }}
        >
          <img style={{ width: '10rem' }} src={ramen} />
        </Item>
        <Item
          select={s.link}
          onClick={() => {
            setSelects({ ...s, link: !s.link });
          }}
        >
          <a href="https://www.google.com/">Google.com</a>
        </Item>
        <Item
          select={s.inline}
          onClick={() => {
            setSelects({ ...s, inline: !s.inline });
          }}
        >
          <span style={{ background: '#ffcdd2' }}>インライン</span>
          <span style={{ background: '#C5CAE9' }}>要素</span>
        </Item>
      </Container>
      <Container>
        <Item>
          <h3>JavaScript</h3>
        </Item>
        <Item
          select={s.jsColor}
          onClick={() => {
            setSelects({ ...s, jsColor: !s.jsColor });
          }}
        >
          <p style={{ color: '#AB47BC' }}>JSから色を変更する</p>
        </Item>
        <Item
          select={s.p}
          onClick={() => {
            setSelects({ ...s, p: !s.p });
          }}
        >
          <p style={{ color: '#5C6BC0' }}>jQueryから色を変える</p>
        </Item>
        <Item>
          <p style={color1 ? { color: '#4CAF50' } : { color: 'white' }}>
            ボタンをクリックして色を変える
          </p>
          <button
            style={{ marginLeft: '1rem' }}
            onClick={() => {
              setColor1(!color1);
            }}
          >
            Button
          </button>
        </Item>
        <Item>
          <span>{text1 ? text1Data.true : text1Data.false}</span>
          <button
            style={{ marginLeft: '1rem' }}
            onClick={() => {
              setText1(!text1);
            }}
          >
            Button
          </button>
        </Item>
        <Item>
          <p>自作の関数を作りボタンをクリックしてアラート</p>
          <button
            onClick={() => {
              alert('ボタンがクリックされました');
            }}
          >
            Button
          </button>
        </Item>

        <Item>
          <p>メソッドを作成しボタンをクリックしてアラート</p>
          <button
            onClick={() => {
              alert('ボタンがクリックされました');
            }}
          >
            Button
          </button>
        </Item>

        <Item>
          <input
            value={input1}
            onChange={(e) => {
              setInput1(e.target.value);
            }}
          />
          <p>{input1}</p>
        </Item>

        <Item>
          <p>ボタンを押したら変数 bool を True, False と切り替える</p>
          <button onClick={() => setBool1(!bool1)}>Button</button>
          <p>変数 boolの値によってテキストが変わる</p>
          <p>{String(bool1)}</p>
        </Item>
        <Item>
          <p>ループで1~10の数字を表示する。10で折り返す</p>
          <p>1 2 3 4 5 6 7 8 9 10 9 8 7 6 5 4 3 2 1</p>
        </Item>
        <Item>
          <p>"Key"に"value"をもつオブジェクトを作る</p>
        </Item>
      </Container>
      <Container>
        <Item>
          <h3>Ajax</h3>
        </Item>
        <Item>
          <p>郵便局のAPIに郵便番号を投げて住所を取得する</p>
          <input
            value={zip}
            onChange={(e) => {
              setZip(e.target.value);
            }}
          />
          <button
            onClick={() => {
              fetchJsonp(`https://zip-cloud.appspot.com/api/search?zipcode=${zip}`)
                .then((res) => {
                  return res.json();
                })
                .then((data: zipResponse) => {
                  console.log(data);
                  const result = data.results[0];
                  setAddress(result.address1 + result.address2 + result.address3);
                })
                .catch((err) => {
                  console.log(err);
                });
            }}
          >
            検索
          </button>
          <p>{address}</p>
        </Item>
      </Container>
    </Page>
  );
};

export default Preview;
