---
title: Blog Setup
author: "Stefan Huber"
date: "2018-10-31"
layout: post
draft: false
path: "/posts/blog-setup/"
tags:
  - "TagOne"
  - "TagTwo"
description: "Damit allenfalls auch weitere Gesellen auf der Walz von Erfahrungen von bisherigen Personen profitieren können, muss ein kleines Log-Buch her..."
---
import Gallery from 'gatsby-theme-signalwerk/src/components/Div';


## Idee
Um die Walz von Alex während seinem Aufenthalt in der Signalwerk GmbH zu dokumentieren und gewisse Learnings von uns beiden fest zu halten, habe ich heute eine Blog-Engine aufgesetzt.


## Design
Das verwendete System ([gatsby](https://www.gatsbyjs.org/)) hat ganz neu die Möglichkeit so genannte [Themes](https://github.com/gatsbyjs/gatsby/issues/2662) zu verwenden. Basierend auf [Christopher Biscardis](https://www.christopherbiscardi.com/) [Theme](https://github.com/ChristopherBiscardi/gatsby-theme-examples) habe ich das Setup adaptiert und habe [mein Theme](https://github.com/signalwerk/gatsby-theme-signalwerk) nun so generalisiert, dass es in mehreren Websites verwendet werden kann. Das Design selber wurde noch nicht gross angepasst. Es  soll später in etwas dem von [Logrinto](https://logrinto.ch/) entsprechen.

## Technik
Um das ganze technisch möglichst unkompliziert zu halten, habe ich [gatsby](https://www.gatsbyjs.org/) verwendet. Nun kann Alex und ich in einem [GitHub-Repository](https://github.com/signalwerk/walz.alexanderboenninger) jeweils einzelne [Markdown-Files](https://daringfireball.net/projects/markdown/syntax) erstellen und der Webservice [Travis CI](https://travis-ci.org/) macht dann aus meinem Setup und dem Inhalt eine [Website](https://signalwerk.github.io/walz.alexanderboenninger/).


### Status
Ob das System gerade eine neue Website erstellt kann man hier sehen;


<Div className='col2of12'>

[![Build Status](https://travis-ci.org/signalwerk/walz.alexanderboenninger.svg?branch=master)](https://travis-ci.org/signalwerk/walz.alexanderboenninger)

</Div>
