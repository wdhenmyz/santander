import {SafeAreaView} from "react-native-safe-area-context"
import {StatusBar, Text, StyleSheet, Pressable, View, TextInput, ImageBackground, ScrollView, Image} from "react-native"
import {Link, router, Stack} from "expo-router"

/*
  const sair = () => {
    alert("saindo...")
  }
      <Stack.Screen options={{
        title:'santander',
        headerTitleAlign: 'center',
        headerRight: () => <Button title="sair" onPress={sair}/>,
      }} />
  configurar o stack sem precisar do layout


  <link href="/termos">Ir para termos</link>  
  <link href="/frete">Ir para termos</link>  
  // para redirecionar agrupamentos ignorando a pasta e vai direto para o arquivo

  <link href="/profile/1">perfil 1</link>  
  <link href="/profile/2">perfil 2</link> 
*/

export default function Screen (){
  const click = () => {
    router.navigate('home')
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar/>
      
      <ScrollView contentContainerStyle={{alignItems: 'center'}} style={styles.scrollView}>
        <View style={styles.paragrafo}>
          <Image source={require('../../assets/logo.png')} style={styles.logo}/>
          <Text style={styles.paragrafo}>santander</Text>

        </View>
        

            <ImageBackground source={{uri:"https://cms.santander.com.br/sites/MOB_Propostas/imagemproposta/campo-landing-top-banner/24-08-13_165924_P_banner_lp_header_contacartao_desktop_v4.jpg"}} style={styles.image} >
                <View style={styles.view1}>
                    <Text style={{fontWeight: '300', fontSize: 25, marginBottom: 15}}>Conta, cartão e saques ilimitados gratuitos.</Text>
                    <Text style={{marginBottom: 40}}>E mais: chat disponível 24h por dia, com toda a segurança de um banco global.</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Digite seu cpf:'
                        keyboardType="numeric"
                    />
                    <Pressable style={styles.btn} onPress={click}>
                       <Text style={{color: 'white', fontWeight: '500'}}>Peça já</Text> 
                    </Pressable>
                </View>
            </ImageBackground>

            <Text style={{fontWeight: '300', fontSize: 26, textAlign:'center', marginTop: 50, marginBottom: 50}}> 
                Conta, Cartão de Crédito e diversas soluções 
                para te ajudar em todos os momentos da sua vida.
            </Text>

            <View style={styles.view2}>
                <Text style={{fontWeight: '300', fontSize: 20, textAlign:'center', marginBottom: 10}}> 
                    10 dias sem juros no limite da conta
                </Text>
                <Text style={{fontWeight: '300', fontSize: 15, textAlign:'center',}}> 
                    Cadastre e mantenha CPF ou celular como chaves 
                    Pix no Santander e ganhe fôlego para 
                    gerenciar gastos inesperados.
                </Text>
            </View>

            <Text style={{fontWeight: '300', fontSize: 25, textAlign:'center', marginBottom: 50}}>
            Escolha o pacote de serviços que mais combina com as suas necessidades, 
            incluindo o de serviços essenciais gratuito.
            </Text>

            <View style={styles.view3}>
                <Text style={{fontWeight: '300', fontSize: 18, textAlign:'center', marginBottom: 10}}>
                    Conta Free
                </Text>
                <Text style={{fontWeight: '300', fontSize: 30, textAlign:'center'}}>
                R$ 0,00 /mês
                </Text>
                <View style={styles.view3a}>
                    <Text style={{marginBottom: 10, marginTop: 10, padding: 10}}>Saques ilimiatados gratuitos</Text>
                    <Text style={{marginBottom: 10, marginTop: 10, padding: 10}}>Chat online 24h por dia, 7 dias por semana</Text>
                    <Text style={{marginBottom: 10, marginTop: 10, padding: 10}}>Seu banco digital com toda a segurança de um banco global</Text>
                </View>
            </View>

            <View style={styles.view4}>
                <Text style={{fontWeight: '300', fontSize: 18, textAlign:'center', marginBottom: 10}}>
                    De anuidade zero a benefícios exclusivos com os cartões de crédito Santander,
                     peça seu cartão ao abrir sua conta e aproveite para usar o cartão online antes mesmo do físico chegar.
                </Text>

                <Text style={{fontWeight: '300', fontSize: 27, textAlign:'center', marginBottom: 10}}>
                    Cadastre seu cartão nas carteiras digitais e já aproveite as facilidades. 
                    Você acumula pontos Esfera e troca por viagens, produtos, serviços e muito mais.
                </Text>
            </View>

            <View style={styles.view5}>
              <Image 
                source={require('../../assets/cartao.jpg')}
                style={styles.cartao}
              />

              <Text style={{fontWeight: '300', fontSize: 27 ,marginBottom: 10, marginTop: 10, padding: 10}}>
              Cartão de Crédito e Tag Santander Sem Parar
              </Text>
              <Text style={{padding: 10, fontSize: 16}}>
              Com os cartões Santander, você pede sua Tag Santander Sem Parar com mensalidade ZERO.
              Você só paga adesão de R$ 20 uma única vez e depois não precisa se preocupar com mensalidade⁴.
              A única com serviços e benefícios muito além do pedágio e estacionamento.
              </Text>
            </View>

            <Text style={{fontWeight: '300', fontSize: 27, margin: 12}}>
            Abra sua conta de onde estiver e já comece a usar:
            </Text>

            <View style={{padding: 20}}>
              <Text style={styles.text}>
                1.  Preencha seus dados e escolha seu cartão e pacote de serviços ideal.
              </Text>

              <Text style={styles.text}>
                2.  Durante o pedido de abertura, você pode configurar a senha e já começar a movimentar sua conta.
              </Text>

              <Text style={styles.text}>
                3.  Tenha o cartão online antes mesmo do seu físico chegar, controle seus gastos com o App Way e cadastre seu cartão nas carteiras digitais.
              </Text>
            </View>

            <Text style={{fontWeight: '400', fontSize: 20, margin: 12, textAlign: 'left', width: '90%', marginBottom: 70}}>
              Leva só uns minutinhos!
            </Text>

            <Image 
              source={{
                uri: 'https://cms.santander.com.br/sites/MOB_Propostas/imagemproposta/campo-boxer/24-08-16_183908_P_banner-lp-pre-venda-shows.jpg',
              }}
              style={{width: '100%', height: 300, marginBottom: 20}}
            />

            <Text style={{fontWeight: '300', fontSize: 27, margin: 12}}>
              Com o Santander você tem acesso a cursos educacionais gratuitos.
            </Text>
            
            <Text style={{fontWeight: '300', fontSize: 19, padding: 8}}>
              Tenha acesso a cursos de inglês, marketing digital, habilidades gamer, IA e produtividade.
              Conheça mais em santander.com.br/santander-educacao
            </Text>

            <Text style={{fontWeight: '400', width: '95%', marginTop: 5, marginBottom: 50}} >
              Aproveite agora!
            </Text>

            <View style={styles.view6}>

              <View style={{padding: 20}}>
                <Text style={{fontWeight: '400', fontSize: 17, color: 'white', textAlign: 'left'}}>
                  Abra sua conta online
                </Text>

                <Text style={{fontWeight: '400', fontSize: 25, color: 'white', textAlign: 'left', marginTop: 19}}>
                  Ainda não é cliente Santander? 
                  Abra sua conta agora mesmo.
                </Text>

                <TextInput
                  style={styles.input}
                  placeholder='Digite seu cpf:'
                  keyboardType="numeric"
                  placeholderTextColor={'white'}
                />

                <Pressable
                 onPress={() => alert('Abriu a conta')} 
                 style={styles.pressable}
                >
                  <Text style={{color: 'red'}}>
                    Peça Cartão + conta
                  </Text>
                </Pressable>
              </View>

              <Image 
                source={{
                  uri: 'https://cms.santander.com.br/sites/MOB_Propostas/imagemproposta/campo-boxer2/24-08-13_151339_M_21-12-22_143704_m_girlmobile+%281%29.png',
                }}
                style={{width: '100%', height: 300}}
              />

            </View>

            <View style={styles.view7}>
                
              <View>
                <Text style={styles.view7txt}>
                  Os produtos mencionados estão sujeitos à aprovação de crédito e cadastro e podem ser contratados de maneira independente.
                </Text>

                <Text style={styles.view7txt}> 
                  ¹Utilize o crédito de forma consciente. Sujeito à aprovação de crédito e disponibilização de limite de conta. Necessário cadastrar e manter uma chave Pix, CPF ou Celular em conta corrente Santander.
                </Text>

                <Text style={styles.view7txt}> 
                  ²Confira os descontos e as demais condições dos pacotes de serviços em www.santander.com.br/relacionamento_vangogh.
                </Text>

                <Text style={styles.view7txt}> 
                  ³Sujeito à análise. Cashback limitado a R$ 500 por fatura.
                </Text>

                <Text style={styles.view7txt}> 
                  ⁴Consulte condições em https://tagsantander.semparar.com.br/#/.
                </Text>

                <Text style={styles.view7txt}> 
                  Contas abertas pelo canal digital não serão movimentáveis por cheque.
                </Text>

                <View style={styles.separator} />
              </View> 
                <View style={{marginTop: 30}}>
                  <Text style={styles.view7txt}>
                    © 2023 Banco Santander (Brasil) S.A., CNPJ: 90.400.888/0001-42
                    Av. Presidente Juscelino Kubitscheck 2041/2235 – Vila Olímpia – São Paulo/SP.
                  </Text>
                </View>
              
            </View>

        </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: 500,
        flexDirection: 'column',
        backgroundColor: 'white',
        overflow: 'scroll',
      },

      scrollView: {
        flex: 1,
      },
    
      paragrafo: {
        color: 'red',
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 10,
        alignItems: 'center',
        width: '90%',
        marginLeft: 5,
        flexDirection: 'row',
        flex: 1,
      },

      logo: {
        width: 30,
        height: 30,
      },

      image: {
        width: '100%',
        height: 490,
        alignItems: 'center',
        justifyContent: 'flex-end',
      },
    
      view1: {
        padding: 20,
        borderWidth: 1,
        borderColor: 'lightgrey',
        borderRadius: 5,
        width: '93%',
        justifyContent: 'center',
        backgroundColor: 'white',
      },
    
      input: {
        width: 310,
        height: 40,
        borderRadius: 3,
        marginBottom: 40,
        padding: 8,
        borderWidth: 1,
        borderColor: 'lightgrey',
        marginTop: 20,
        color: 'white',
        
      },

      view2: {
        padding: 10,
        borderWidth: 1,
        borderColor: 'lightgrey',
        borderRadius: 5,
        width: '90%',
        marginBottom: 40,
        justifyContent: 'center',
        backgroundColor: 'white',
      },

      view3: {
        paddingTop: 10,
        borderWidth: 1,
        borderColor: 'lightgrey',
        borderRadius: 5,
        width: '90%',
        justifyContent: 'flex-start',
        backgroundColor: 'white',
        alignItems: 'center',
        height: 350,
        marginBottom: 90,
      },

      view3a: {
       
        borderWidth: 1,
        borderColor: 'lightgrey',
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: 'white',
        height: '69%',
        paddingLeft: 20,
        marginTop: 30
      },

      view4: {
        flex: 1,
        borderWidth: 1,
        borderColor: 'lightgrey',
        width: '96%',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: 'white',
        padding: 30,
        marginBottom: 100
      },

      view5: {
        flex: 1,
        borderWidth: 1,
        borderColor: 'lightgrey',
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: 'lightblue',
        marginBottom: 100
      },

      cartao: {
        width: '100%',
        height: 200
      },

      text: {
        fontSize: 15,
        margin: 10,
        fontWeight: '300'
      },

      view6: {
        flex: 1,
        backgroundColor: 'red',
        width: '100%',
        height: 585,
      },

      pressable: {
        backgroundColor: 'white', 
        width: 200, 
        height: 40, 
        justifyContent: 'center', 
        alignItems: 'center',
        borderRadius: 5
      },

      view7: {
        flex: 1,
        backgroundColor: 'black',
        width: '100%',
        height: 640,
        paddingTop: 70,
        alignItems: 'center',
      },

      view7txt: {
        color: 'lightgrey',
        paddingLeft: 20,
        paddingRight: 20,
        fontSize: 16
      },

      separator: {
        width: 350,
        height: 1, // height of the line
        backgroundColor: '#ccc', // line color
        marginVertical: 10, // spacing around the line
        marginTop: 70,
        marginLeft: 20
      },
      
      btn: {
        width: 300,
        height: 40,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        padding: 10,
        marginTop: 20
      }
})