import React, { Children } from 'react';
import ramen from '../img/ramen.png';
import styled from 'styled-components';
import fetchJsonp from 'fetch-jsonp';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

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

const Item = styled.div<{ select?: boolean }>`
  position: relative;
  padding: 1rem 0 1rem 0;
  border: solid #bdbdbd;
  border-width: 0 0 1px 0;
  background: ${(props) => (props.select ? '#E3F2FD' : 'none')};
`;

const Icon = styled(InfoOutlinedIcon)<{ select?: boolean }>`
  color: ${(props) => (props.select ? 'gray' : 'black')};
  position: absolute;
  top: 0;
  left: 0;
  width: 1rem;
  height: 1rem;
`;

interface IH {
  p: boolean;
  color: boolean;
  img: boolean;
  link: boolean;
  inline: boolean;
}

const Preview: React.FC = () => {
  const [color1, setColor1] = React.useState(true);
  const [text1, setText1] = React.useState(true);
  const text1Data = {
    true: '変更前のテキスト',
    false: 'クリックされた',
  };
  const [input1, setInput1] = React.useState('ユーザーの入力');
  const [bool1, setBool1] = React.useState(true);
  const [zip, setZip] = React.useState('1670043');
  const [address, setAddress] = React.useState('東京都杉並区上荻');
  const [h, setH] = React.useState<IH>({
    p: false,
    color: false,
    img: false,
    link: false,
    inline: false,
  });
  const [s, setSelects] = React.useState({
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
  });

  const [a, setA] = React.useState({
    ajax: false,
  });

  const [titleClick, setTitleClick] = React.useState({
    html: false,
    js: false,
    ajax: false,
  });

  const onTitleHTMLClick = () => {
    // if (!titleClick.html) {
    //   setH({ ...h });
    //   let result: IH = { ...h };
    //   for (let key in result) {
    //     result[key] = true;
    //   }
    //   setTitleClick({ ...titleClick, html: true });
    // } else {
    //   setSelects({ ...s, p: false, color: false, img: false, link: false, inline: false });
    //   setTitleClick({ ...titleClick, html: false });
    // }
  };

  const onTitleJSClick = () => {
    if (!titleClick.html) {
      setSelects({
        ...s,
        jsColor: true,
        jQColor: true,
        bColor: true,
        bText: true,
        fAlert: true,
        mAlert: true,
        iText: true,
        bool: true,
        loop: true,
        obj: true,
      });
      setTitleClick({ ...titleClick, js: true });
    } else {
      setSelects({
        ...s,
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
      });
      setTitleClick({ ...titleClick, js: false });
    }
  };

  return (
    <Page>
      <Container>
        <Item>
          <Icon onClick={onTitleHTMLClick} />
          <h3>HTML</h3>
        </Item>

        <Item select={h.p}>
          <Icon
            select={h.p}
            onClick={() => {
              setH({ ...h, p: !h.p });
            }}
          />
          {h.p ? <p>文字を表示する</p> : <p>テキスト</p>}
        </Item>

        <Item select={h.color}>
          <Icon
            select={h.color}
            onClick={() => {
              setH({ ...h, color: !h.color });
            }}
          />
          {h.color ? <p>文字色を指定する</p> : <p style={{ color: '#FFC107' }}>テキスト</p>}
        </Item>

        <Item select={h.img}>
          <Icon
            select={h.img}
            onClick={() => {
              setH({ ...h, img: !h.img });
            }}
          />
          {h.img ? <p>画像を表示する</p> : <img style={{ width: '10rem' }} src={ramen} />}
        </Item>

        <Item select={h.link}>
          <Icon
            select={h.link}
            onClick={() => {
              setH({ ...h, link: !h.link });
            }}
          />
          {h.link ? (
            <>
              <p>下記のリンクを使用してリンクの実装</p>
              <p>https://www.google.com/</p>
            </>
          ) : (
            <a href="https://www.google.com/" target="blank">
              Google.com
            </a>
          )}
        </Item>

        <Item select={h.inline}>
          <Icon
            select={h.inline}
            onClick={() => {
              setH({ ...h, inline: !h.inline });
            }}
          />
          {h.inline ? (
            <p>インライン要素にそれぞれ背景色を指定する</p>
          ) : (
            <>
              <span style={{ background: '#ffcdd2' }}>インライン</span>
              <span style={{ background: '#C5CAE9' }}>要素</span>
            </>
          )}
        </Item>
      </Container>

      <Container>
        <Item>
          <h3>JavaScript</h3>
        </Item>

        <Item select={s.jsColor}>
          <Icon
            select={s.jsColor}
            onClick={() => {
              setSelects({ ...s, jsColor: !s.jsColor });
            }}
          />
          {s.jsColor ? <p>JSから色を変更する</p> : <p style={{ color: '#FFC107' }}>テキスト</p>}
        </Item>

        <Item select={s.jQColor}>
          <Icon
            select={s.jQColor}
            onClick={() => {
              setSelects({ ...s, jQColor: !s.jQColor });
            }}
          />
          {s.jQColor ? (
            <p>jQueryを使用して色を変える</p>
          ) : (
            <p style={{ color: '#FFC107' }}>テキスト</p>
          )}
        </Item>

        <Item select={s.bColor}>
          <Icon
            select={s.bColor}
            onClick={() => {
              setSelects({ ...s, bColor: !s.bColor });
            }}
          />
          {s.bColor ? (
            <p>ボタンをクリックして色を変える</p>
          ) : (
            <>
              <p style={color1 ? { color: '#4CAF50' } : {}}>テキスト</p>
              <button
                onClick={() => {
                  setColor1(!color1);
                }}
              >
                Button
              </button>
            </>
          )}
        </Item>

        <Item select={s.bText}>
          <Icon
            select={s.bText}
            onClick={() => {
              setSelects({ ...s, bText: !s.bText });
            }}
          />
          {s.bText ? (
            <p>ボタンをクリックしてテキストを変える</p>
          ) : (
            <>
              <p>{text1 ? text1Data.true : text1Data.false}</p>
              <button
                onClick={() => {
                  setText1(!text1);
                }}
              >
                Button
              </button>
            </>
          )}
        </Item>

        <Item select={s.fAlert}>
          <Icon
            select={s.fAlert}
            onClick={() => {
              setSelects({ ...s, fAlert: !s.fAlert });
            }}
          />
          {s.fAlert ? (
            <p>自作の関数を作りボタンをクリックしてアラート</p>
          ) : (
            <>
              <p>アラート</p>
              <button
                onClick={() => {
                  alert('ボタンがクリックされました');
                }}
              >
                Button
              </button>
            </>
          )}
        </Item>

        <Item select={s.mAlert}>
          <Icon
            select={s.mAlert}
            onClick={() => {
              setSelects({ ...s, mAlert: !s.mAlert });
            }}
          />
          {s.mAlert ? (
            <p>メソッドを作成しボタンをクリックしてアラート</p>
          ) : (
            <>
              <p>アラート</p>
              <button
                onClick={() => {
                  alert('ボタンがクリックされました');
                }}
              >
                Button
              </button>
            </>
          )}
        </Item>

        <Item select={s.iText}>
          <Icon
            select={s.iText}
            onClick={() => {
              setSelects({ ...s, iText: !s.iText });
            }}
          />
          {s.iText ? (
            <p>ユーザーの入力を受け取って表示する</p>
          ) : (
            <>
              <input
                value={input1}
                onChange={(e) => {
                  setInput1(e.target.value);
                }}
              />
              <p>{input1}</p>
            </>
          )}
        </Item>

        <Item select={s.bool}>
          <Icon
            select={s.bool}
            onClick={() => {
              setSelects({ ...s, bool: !s.bool });
            }}
          />
          {s.bool ? (
            <>
              <p>変数 bool を宣言。ボタンをクリックで True, False と切り替える</p>
              <p>変数 bool の値を表示する</p>
            </>
          ) : (
            <>
              <p>{String(bool1)}</p>
              <button onClick={() => setBool1(!bool1)}>Button</button>
            </>
          )}
        </Item>

        <Item select={s.loop}>
          <Icon
            select={s.loop}
            onClick={() => {
              setSelects({ ...s, loop: !s.loop });
            }}
          />
          {s.loop ? (
            <p>ループで1~10の数字を表示する。10で折り返す</p>
          ) : (
            <>
              <p>1 2 3 4 5 6 7 8 9 10 9 8 7 6 5 4 3 2 1</p>
            </>
          )}
        </Item>

        <Item select={s.obj}>
          <Icon
            select={s.obj}
            onClick={() => {
              setSelects({ ...s, obj: !s.obj });
            }}
          />
          {s.obj ? (
            <>
              <p>fastに"ラーメン", lastに"55" をもつオブジェクトを作る</p>
              <p>fastとlast を表示する</p>
            </>
          ) : (
            <p>ラーメン55</p>
          )}
        </Item>
      </Container>

      <Container>
        <Item>
          <h3>Ajax</h3>
        </Item>
        <Item select={a.ajax}>
          <Icon
            select={a.ajax}
            onClick={() => {
              setA({ ...a, ajax: !a.ajax });
            }}
          />
          {a.ajax ? (
            <>
              <p>郵便局のAPIに郵便番号を投げて住所を取得する</p>
              <a href="http://zipcloud.ibsnet.co.jp/doc/api" target="blank">
                ドキュメント
              </a>
            </>
          ) : (
            <>
              <p>郵便番号</p>
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
            </>
          )}
        </Item>
      </Container>
    </Page>
  );
};

export default Preview;
